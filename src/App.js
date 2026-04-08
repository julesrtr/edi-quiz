import React, { useState, useCallback } from 'react';
import './App.css';
import { situations } from './data/questions';

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

// Mascot moods: 'happy' | 'thinking' | 'concerned' | 'great'
// Only 'happy' is used for now; other moods will be wired to team indicators later.
function Mascot({ mood = 'happy' }) {
  return (
    <div className="mascot" aria-label="Mascot" role="img">
      <div className="mascot-head">
        <div className="mascot-eyes">
          <div className="mascot-eye" />
          <div className="mascot-eye" />
        </div>
        <div className="mascot-mouth" />
        <div className="mascot-cheeks">
          <div className="mascot-cheek" />
          <div className="mascot-cheek" />
        </div>
      </div>
    </div>
  );
}

function LandingPage({ onStart }) {
  return (
    <div className="landing">
      <Mascot mood="happy" />
      <h1 className="landing-logo">Angles morts</h1>
      <p className="landing-subtitle">
        Des équipes peuvent sembler efficaces, polies et fonctionnelles,<br />
        tout en reproduisant des angles morts d'équité, de diversité et d'inclusion.<br />
        Explore 4 situations réalistes et vois ce que chaque réflexe change dans l'équipe !
      </p>
      <button className="start-btn" onClick={onStart}>
        Commencer
      </button>
    </div>
  );
}

function SituationSelectPage({ onSelect, completedIds = [] }) {
  return (
    <div className="situations-container">
      <div className="situations-header">
        <h1 className="situations-title">Choisis une situation</h1>
      </div>

      <div className="situations-grid">
        {situations.map((situation, index) => {
          const done = completedIds.includes(situation.id);
          return (
            <button
              key={situation.id}
              className={`situation-card${done ? ' completed' : ''}`}
              onClick={() => onSelect(situation.id)}
              style={{ '--card-accent': situation.color }}
            >
              <div className="situation-card-header">
                <span className="situation-number">Situation {index + 1}</span>
                {done && (
                  <span className="situation-check" aria-label="Complétée">✓</span>
                )}
              </div>
              <span className="situation-icon" aria-hidden="true">{situation.icon}</span>
              <div className="situation-content">
                <h3 className="situation-card-title">{situation.title}</h3>
                <p className="situation-card-desc">{situation.description}</p>
              </div>
              <span className="situation-card-cta">Explorer →</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ScenarioPage({ situation, onBack }) {
  return (
    <div className="scenario-container">
      <div className="scenario-card">
        <button className="scenario-back" onClick={onBack}>← Retour aux situations</button>
        <h2 className="scenario-title">{situation.title}</h2>
        <p className="scenario-desc">{situation.description}</p>
        <div className="scenario-placeholder">
          <p>Le contenu de cette situation sera bientôt disponible.</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [screen, setScreen] = useState('landing');
  const [selectedSituation, setSelectedSituation] = useState(null);
  const [completedIds, setCompletedIds] = useState([]);

  const handleStart = useCallback(() => {
    setScreen('situations');
  }, []);

  const handleSelectSituation = useCallback((id) => {
    setSelectedSituation(situations.find((s) => s.id === id));
    setScreen('scenario');
  }, []);

  // Call this when a scenario is finished to mark it complete
  const handleCompleteSituation = useCallback((id) => {
    setCompletedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const handleBackToSituations = useCallback(() => {
    setSelectedSituation(null);
    setScreen('situations');
  }, []);

  return (
    <div className="app">
      <FloatingShapes />
      {screen === 'landing' && <LandingPage onStart={handleStart} />}
      {screen === 'situations' && (
        <SituationSelectPage onSelect={handleSelectSituation} completedIds={completedIds} />
      )}
      {screen === 'scenario' && selectedSituation && (
        <ScenarioPage situation={selectedSituation} onBack={handleBackToSituations} />
      )}
    </div>
  );
}

export default App;
