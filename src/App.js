import React, { useState, useCallback } from 'react';
import './App.css';
import { questions, videos } from './data/questions';

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

function FloatingShapes() {
  return (
    <div className="shapes-container">
      <div className="shape shape-1" />
      <div className="shape shape-2" />
      <div className="shape shape-3" />
      <div className="shape shape-4" />
    </div>
  );
}

function Confetti() {
  const colors = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#667eea', '#764ba2', '#ff9ff3'];
  const pieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    color: colors[Math.floor(Math.random() * colors.length)],
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 2,
    size: 6 + Math.random() * 8,
  }));

  return (
    <div className="confetti-container">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti"
          style={{
            left: `${p.left}%`,
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
            '--fall-duration': `${p.duration}s`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
        />
      ))}
    </div>
  );
}

function LandingPage({ onStart }) {
  return (
    <div className="landing">
      <h1 className="landing-logo">EDI Quiz</h1>
      <p className="landing-subtitle">
        Teste tes connaissances et apprends en t'amusant !
      </p>
      <button className="start-btn" onClick={onStart}>
        Commencer
      </button>
    </div>
  );
}

function QuizPage({ question, questionIndex, totalQuestions, onAnswer, selectedAnswer, showExplanation, onNext }) {
  const progress = ((questionIndex) / totalQuestions) * 100;

  return (
    <div className="quiz-container">
      <div className="progress-section">
        <div className="progress-info">
          <span className="progress-text">Progression</span>
          <span className="progress-counter">
            {questionIndex + 1} / {totalQuestions}
          </span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="question-card" key={question.id}>
        <h2 className="question-text">{question.question}</h2>

        <div className="options-grid">
          {question.options.map((option, index) => {
            let className = 'option-btn';
            if (selectedAnswer !== null) {
              className += ' disabled';
              if (index === selectedAnswer) {
                className += option.correct ? ' correct selected' : ' wrong selected';
              } else if (option.correct) {
                className += ' correct';
              }
            }

            return (
              <button
                key={index}
                className={className}
                onClick={() => selectedAnswer === null && onAnswer(index)}
              >
                <span className="option-icon">{OPTION_LABELS[index]}</span>
                <span>{option.text}</span>
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="explanation-box">
            <div className="explanation-title">Explication</div>
            <p className="explanation-text">{question.explanation}</p>
          </div>
        )}

        {showExplanation && (
          <button className="next-btn" onClick={onNext}>
            {questionIndex + 1 < totalQuestions ? 'Question suivante' : 'Voir les résultats'}
          </button>
        )}
      </div>
    </div>
  );
}

function ResultsPage({ score, total, onRestart }) {
  const percent = Math.round((score / total) * 100);
  let message;
  if (percent === 100) message = 'Score parfait ! Tu gères !';
  else if (percent >= 75) message = 'Très bien joué ! Continue comme ça !';
  else if (percent >= 50) message = 'Pas mal ! Tu peux encore progresser !';
  else message = 'Continue d\'apprendre, tu vas y arriver !';

  return (
    <div className="results-container">
      <Confetti />
      <div className="results-card">
        <h2 className="results-title">Résultats</h2>

        <div className="score-circle" style={{ '--score-percent': `${percent}%` }}>
          <div className="score-circle-inner">
            <span className="score-percent">{percent}%</span>
            <span className="score-label">Score</span>
          </div>
        </div>

        <div className="results-score">
          {score} / {total}
        </div>
        <p className="results-message">{message}</p>

        {videos.length > 0 && (
          <div className="videos-section">
            <h3 className="videos-title">Pour aller plus loin</h3>
            {videos.map((video, i) => (
              <div key={i} className="video-card">
                <div className="video-card-title">{video.title}</div>
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        )}

        <button className="restart-btn" onClick={onRestart}>
          Recommencer
        </button>
      </div>
    </div>
  );
}

function App() {
  const [screen, setScreen] = useState('landing');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const handleStart = useCallback(() => {
    setScreen('quiz');
    setQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  }, []);

  const handleAnswer = useCallback((index) => {
    setSelectedAnswer(index);
    if (questions[questionIndex].options[index].correct) {
      setScore((s) => s + 1);
    }
    setTimeout(() => setShowExplanation(true), 600);
  }, [questionIndex]);

  const handleNext = useCallback(() => {
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setScreen('results');
    }
  }, [questionIndex]);

  return (
    <div className="app">
      <FloatingShapes />
      {screen === 'landing' && <LandingPage onStart={handleStart} />}
      {screen === 'quiz' && (
        <QuizPage
          question={questions[questionIndex]}
          questionIndex={questionIndex}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
          selectedAnswer={selectedAnswer}
          showExplanation={showExplanation}
          onNext={handleNext}
        />
      )}
      {screen === 'results' && (
        <ResultsPage score={score} total={questions.length} onRestart={handleStart} />
      )}
    </div>
  );
}

export default App;
