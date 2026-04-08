import React, { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';
import { situations, finalSynthesis } from './data/questions';

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
function Mascot({ mood = 'happy', size = 'normal' }) {
  const sizeClass = size === 'small' ? 'mascot--small' : '';
  return (
    <div className={`mascot ${sizeClass}`} aria-label="Mascot" role="img">
      <div className={`mascot-head mascot-mood-${mood}`}>
        <div className="mascot-eyes">
          <div className={`mascot-eye ${mood === 'concerned' ? 'mascot-eye--worried' : ''}`} />
          <div className={`mascot-eye ${mood === 'concerned' ? 'mascot-eye--worried' : ''}`} />
        </div>
        <div className={`mascot-mouth mascot-mouth--${mood}`} />
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

function SituationSelectPage({ onSelect, completedIds = [], onGoToSynthesis }) {
  const allDone = completedIds.length >= situations.length;
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

      {/* Synthesis unlock area */}
      <div className={`synthesis-unlock ${allDone ? 'synthesis-unlock--ready' : ''}`}>
        {allDone ? (
          <>
            <div className="synthesis-unlock-icon">✦</div>
            <p className="synthesis-unlock-label">Parcours complété</p>
            <h2 className="synthesis-unlock-title">Découvrir la synthèse finale</h2>
            <p className="synthesis-unlock-desc">
              Les 4 situations ont été explorées. Accédez à la synthèse de ce que ces angles morts révèlent sur le travail d'équipe.
            </p>
            <button className="synthesis-unlock-btn" onClick={onGoToSynthesis}>
              Lire la synthèse →
            </button>
          </>
        ) : (
          <>
            <div className="synthesis-unlock-progress">
              <span className="synthesis-unlock-count">{completedIds.length} / {situations.length}</span>
              <span className="synthesis-unlock-hint">situations explorées</span>
            </div>
            <p className="synthesis-unlock-locked">
              Complétez les 4 situations pour débloquer la synthèse finale.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

/* ---- Team indicators bar ---- */
function TeamIndicators({ values, animate }) {
  const labels = [
    { key: 'participation', label: 'Participation' },
    { key: 'equite', label: 'Équité' },
    { key: 'inclusion', label: 'Inclusion' },
    { key: 'climat', label: 'Climat' },
  ];
  return (
    <div className={`team-indicators ${animate ? 'team-indicators--visible' : ''}`}>
      {labels.map(({ key, label }) => (
        <div className="indicator" key={key}>
          <div className="indicator-label">{label}</div>
          <div className="indicator-track">
            <div
              className="indicator-fill"
              style={{ width: animate ? `${values[key]}%` : '0%' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---- Understanding section with 3 tabs ---- */
function UnderstandingSection({ choice }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { key: 'edi', label: 'Lecture EDI', content: choice.edi },
    { key: 'teamwork', label: 'Impact sur la collaboration', content: choice.teamwork },
    { key: 'practice', label: 'Meilleure pratique', content: choice.practice },
  ];
  return (
    <div className="understanding">
      <div className="understanding-tabs">
        {tabs.map((tab, i) => (
          <button
            key={tab.key}
            className={`understanding-tab ${activeTab === i ? 'understanding-tab--active' : ''}`}
            onClick={() => setActiveTab(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="understanding-content">
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
}

function ScenarioPage({ situation, onBack, onComplete }) {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [revealStage, setRevealStage] = useState(0);
  const revealRef = useRef(null);

  const handleChoiceClick = useCallback((choice) => {
    if (selectedChoice && choice.id === selectedChoice.id) return; // already on this choice
    setSelectedChoice(choice);
    setRevealStage(0);
    // Staggered reveal: 0 -> 1 -> 2 -> 3 -> 4
    setTimeout(() => setRevealStage(1), 100);  // reaction + mascot + indicators
    setTimeout(() => setRevealStage(2), 600);  // consequence cards
    setTimeout(() => setRevealStage(3), 1100); // diagnosis
    setTimeout(() => setRevealStage(4), 1600); // understanding + continue
  }, [selectedChoice]);

  // Scroll to reveal section when it appears
  useEffect(() => {
    if (revealStage === 1 && revealRef.current) {
      setTimeout(() => {
        revealRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }
  }, [revealStage]);

  const handleContinue = useCallback(() => {
    onComplete(situation.id);
    onBack();
  }, [onComplete, onBack, situation.id]);

  const mascotMood = selectedChoice ? selectedChoice.mood : 'happy';

  return (
    <div className="scenario-container">
      {/* Back navigation */}
      <button className="scenario-back" onClick={onBack}>
        ← Retour aux situations
      </button>

      {/* Hero image area */}
      <div className="scenario-hero">
        {situation.image ? (
          <img
            src={situation.image}
            alt={situation.title}
            className="scenario-hero-img"
          />
        ) : (
          <div className="scenario-hero-placeholder">
            <span className="scenario-hero-icon" aria-hidden="true">
              {situation.icon}
            </span>
          </div>
        )}
      </div>

      {/* Situation label + title */}
      <div className="scenario-header">
        <span className="scenario-label">Situation</span>
        <h1 className="scenario-title">{situation.title}</h1>
      </div>

      {/* Context paragraph */}
      <div className="scenario-context">
        <p>{situation.context}</p>
      </div>

      {/* Prompt */}
      <p className="scenario-prompt">{situation.prompt}</p>

      {/* Choices */}
      <div className="scenario-choices">
        {situation.choices.map((choice, index) => (
          <button
            key={choice.id}
            className={`scenario-choice ${
              selectedChoice
                ? choice.id === selectedChoice.id
                  ? 'scenario-choice--selected'
                  : 'scenario-choice--dimmed'
                : ''
            }`}
            style={{ animationDelay: `${0.08 + index * 0.06}s` }}
            onClick={() => handleChoiceClick(choice)}
          >
            <span className="scenario-choice-letter">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="scenario-choice-text">{choice.text}</span>
            {selectedChoice && choice.id === selectedChoice.id && (
              <span className="scenario-choice-selected-mark">●</span>
            )}
          </button>
        ))}
      </div>

      {/* ===== POST-CLICK REVEAL ===== */}
      {selectedChoice && (
        <div className="reveal" ref={revealRef}>

          {/* Layer 1: Mascot + Indicators + Immediate reaction */}
          <div className={`reveal-layer ${revealStage >= 1 ? 'reveal-layer--visible' : ''}`}>
            <div className="reveal-reaction-row">
              <Mascot mood={mascotMood} size="small" />
              <p className="reveal-reaction-text">{selectedChoice.reaction}</p>
            </div>
            <TeamIndicators
              values={selectedChoice.indicators}
              animate={revealStage >= 1}
            />
          </div>

          {/* Layer 2: Consequence cards */}
          <div className={`reveal-layer ${revealStage >= 2 ? 'reveal-layer--visible' : ''}`}>
            <div className="reveal-section-label">Signaux observés</div>
            <div className="consequence-cards">
              {selectedChoice.consequences.map((text, i) => (
                <div
                  className="consequence-card"
                  key={i}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="consequence-dot" />
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Layer 3: Diagnosis */}
          <div className={`reveal-layer ${revealStage >= 3 ? 'reveal-layer--visible' : ''}`}>
            <div className="diagnosis-card">
              <span className="diagnosis-label">Angle mort détecté</span>
              <p className="diagnosis-text">{selectedChoice.diagnosis}</p>
            </div>
          </div>

          {/* Layer 4: Understanding + Continue */}
          <div className={`reveal-layer ${revealStage >= 4 ? 'reveal-layer--visible' : ''}`}>
            <UnderstandingSection choice={selectedChoice} />
            <div className="reveal-continue">
              <button className="reveal-continue-btn" onClick={handleContinue}>
                Explorer une autre situation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SynthesisPage({ onBackToSituations, onBackToLanding }) {
  const data = finalSynthesis;
  return (
    <div className="synthesis">
      {/* Back nav */}
      <button className="scenario-back" onClick={onBackToSituations}>
        ← Retour aux situations
      </button>

      {/* 1. Hero / opening synthesis */}
      <div className="synthesis-hero">
        <Mascot mood="great" />
        <span className="synthesis-overline">Bilan du parcours</span>
        <h1 className="synthesis-hero-title">{data.hero.title}</h1>
        <p className="synthesis-hero-subtitle">{data.hero.subtitle}</p>
      </div>

      {/* 2. Four major blind spots */}
      <section className="synthesis-section">
        <h2 className="synthesis-section-title">Les 4 angles morts</h2>
        <div className="synthesis-blindspots">
          {data.blindSpots.map((bs, i) => (
            <div className="synthesis-blindspot-card" key={i}>
              <span className="synthesis-blindspot-icon">{bs.icon}</span>
              <h3 className="synthesis-blindspot-title">{bs.title}</h3>
              <p className="synthesis-blindspot-body">{bs.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Weak signals */}
      <section className="synthesis-section">
        <h2 className="synthesis-section-title">{data.weakSignals.title}</h2>
        <p className="synthesis-section-intro">{data.weakSignals.intro}</p>
        <div className="synthesis-signals">
          {data.weakSignals.signals.map((sig, i) => (
            <div className="synthesis-signal" key={i}>
              <span className="synthesis-signal-dot" />
              <span className="synthesis-signal-text">{sig}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Why this matters */}
      <section className="synthesis-section">
        <h2 className="synthesis-section-title">{data.whyItMatters.title}</h2>
        <p className="synthesis-section-intro">{data.whyItMatters.intro}</p>
        <div className="synthesis-matters">
          {data.whyItMatters.points.map((pt, i) => (
            <div className="synthesis-matter-item" key={i}>
              <span className="synthesis-matter-label">{pt.label}</span>
              <p className="synthesis-matter-text">{pt.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Practical reflexes */}
      <section className="synthesis-section">
        <h2 className="synthesis-section-title">{data.reflexes.title}</h2>
        <div className="synthesis-reflexes">
          {data.reflexes.items.map((r, i) => (
            <div className="synthesis-reflex-card" key={i}>
              <span className="synthesis-reflex-number">{r.number}</span>
              <div>
                <h3 className="synthesis-reflex-title">{r.title}</h3>
                <p className="synthesis-reflex-text">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Research insights */}
      <section className="synthesis-section">
        <h2 className="synthesis-section-title">{data.researchInsights.title}</h2>
        <div className="synthesis-research">
          {data.researchInsights.cards.map((card, i) => (
            <div className="synthesis-research-card" key={i}>
              <p className="synthesis-research-text">{card.text}</p>
              <span className="synthesis-research-source">{card.source}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Sources */}
      <section className="synthesis-section synthesis-sources-section">
        <h2 className="synthesis-section-title synthesis-sources-title">{data.sources.title}</h2>
        <ul className="synthesis-sources-list">
          {data.sources.references.map((ref, i) => (
            <li key={i} className="synthesis-source-item">{ref}</li>
          ))}
        </ul>
      </section>

      {/* 8. Footer actions */}
      <div className="synthesis-footer">
        <button className="synthesis-footer-primary" onClick={onBackToSituations}>
          Revoir les situations
        </button>
        <button className="synthesis-footer-secondary" onClick={onBackToLanding}>
          Retour à l'accueil
        </button>
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleGoToSynthesis = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setScreen('synthesis');
  }, []);

  const handleBackToLanding = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setScreen('landing');
  }, []);

  return (
    <div className="app">
      <FloatingShapes />
      {screen === 'landing' && <LandingPage onStart={handleStart} />}
      {screen === 'situations' && (
        <SituationSelectPage onSelect={handleSelectSituation} completedIds={completedIds} onGoToSynthesis={handleGoToSynthesis} />
      )}
      {screen === 'scenario' && selectedSituation && (
        <ScenarioPage situation={selectedSituation} onBack={handleBackToSituations} onComplete={handleCompleteSituation} />
      )}
      {screen === 'synthesis' && (
        <SynthesisPage onBackToSituations={handleBackToSituations} onBackToLanding={handleBackToLanding} />
      )}
    </div>
  );
}

export default App;
