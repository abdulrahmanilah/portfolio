import React, { useState, useEffect, useContext } from "react";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { policeGuideSection } from "../../portfolio";
import "./PoliceGuide.scss";

export default function PoliceGuide() {
  const { isDark } = useContext(StyleContext);
  const [selectedScenarioId, setSelectedScenarioId] = useState("");
  const [completedSteps, setCompletedSteps] = useState({});
  const [bookmarks, setBookmarks] = useState({});
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Initialize data
  useEffect(() => {
    if (policeGuideSection.display && policeGuideSection.scenarios.length > 0) {
      setSelectedScenarioId(policeGuideSection.scenarios[0].id);
    }

    const savedCompleted = localStorage.getItem("policeCompletedSteps");
    const savedBookmarks = localStorage.getItem("policeBookmarks");

    if (savedCompleted) {
      try {
        setCompletedSteps(JSON.parse(savedCompleted));
      } catch (e) {
        console.error(e);
      }
    }
    if (savedBookmarks) {
      try {
        setBookmarks(JSON.parse(savedBookmarks));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Update active step if a bookmark exists for this scenario
  useEffect(() => {
    if (selectedScenarioId && bookmarks[selectedScenarioId] !== undefined) {
      setActiveStepIndex(bookmarks[selectedScenarioId]);
    } else {
      setActiveStepIndex(0);
    }
  }, [selectedScenarioId, bookmarks]);

  if (!policeGuideSection.display) {
    return null;
  }

  const { title, subtitle, scenarios } = policeGuideSection;
  const currentScenario = scenarios.find((s) => s.id === selectedScenarioId) || scenarios[0];

  if (!currentScenario) {
    return null;
  }

  const stepsCount = currentScenario.steps.length;
  const currentStep = currentScenario.steps[activeStepIndex] || currentScenario.steps[0];

  const handleNext = () => {
    if (activeStepIndex < stepsCount - 1) {
      setActiveStepIndex(activeStepIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(activeStepIndex - 1);
    }
  };

  const toggleStepCompleted = (scenarioId, stepIndex) => {
    const key = `${scenarioId}-${stepIndex}`;
    const updated = { ...completedSteps, [key]: !completedSteps[key] };
    setCompletedSteps(updated);
    localStorage.setItem("policeCompletedSteps", JSON.stringify(updated));
  };

  const toggleBookmark = (scenarioId, stepIndex) => {
    const isBookmarked = bookmarks[scenarioId] === stepIndex;
    const updated = { ...bookmarks };
    if (isBookmarked) {
      delete updated[scenarioId];
    } else {
      updated[scenarioId] = stepIndex;
    }
    setBookmarks(updated);
    localStorage.setItem("policeBookmarks", JSON.stringify(updated));
  };

  // Calculate scenario progress
  const getScenarioProgress = (scenario) => {
    let completed = 0;
    scenario.steps.forEach((_, idx) => {
      if (completedSteps[`${scenario.id}-${idx}`]) {
        completed++;
      }
    });
    return {
      completed,
      total: scenario.steps.length,
      percent: (completed / scenario.steps.length) * 100,
    };
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="policeguide">
        <div className="police-header-div">
          <h1 className={isDark ? "dark-mode-text police-header-text" : "police-header-text"}>
            {title}
          </h1>
          <p className={isDark ? "dark-mode-text subTitle police-subtitle" : "subTitle police-subtitle"}>
            {subtitle}
          </p>
        </div>

        <div className="police-container-grid">
          {/* Navigation/Sidebar: Scenarios List */}
          <div className="police-sidebar">
            {scenarios.map((scenario) => {
              const isActive = scenario.id === selectedScenarioId;
              const progress = getScenarioProgress(scenario);
              const isScenarioBookmarked = bookmarks[scenario.id] !== undefined;

              return (
                <button
                  key={scenario.id}
                  onClick={() => setSelectedScenarioId(scenario.id)}
                  className={
                    isDark
                      ? `scenario-btn dark-mode-card ${isActive ? "active" : ""}`
                      : `scenario-btn ${isActive ? "active" : ""}`
                  }
                >
                  <div className="scenario-btn-content">
                    <span className="scenario-icon-wrapper">
                      <i className={scenario.icon}></i>
                    </span>
                    <div className="scenario-btn-text">
                      <h4 className="scenario-btn-title">{scenario.title}</h4>
                      <span className="scenario-btn-sub">
                        {progress.completed} of {progress.total} read
                      </span>
                    </div>
                  </div>
                  {isScenarioBookmarked && (
                    <span className="bookmark-indicator" title="Bookmarked step inside">
                      <i className="fas fa-bookmark"></i>
                    </span>
                  )}
                  <div
                    className="scenario-btn-progress-bar"
                    style={{ width: `${progress.percent}%` }}
                  ></div>
                </button>
              );
            })}
          </div>

          {/* Interactive Stepper Wizard Panel */}
          <div className={isDark ? "police-content dark-mode-card" : "police-content"}>
            {/* Scenarios Header */}
            <div className="police-content-header">
              <div>
                <h2>{currentScenario.title}</h2>
                <p>{currentScenario.description}</p>
              </div>
              <button
                onClick={() => toggleBookmark(currentScenario.id, activeStepIndex)}
                className={`bookmark-btn ${bookmarks[currentScenario.id] === activeStepIndex ? "active" : ""}`}
                title="Bookmark this step"
              >
                <i className={bookmarks[currentScenario.id] === activeStepIndex ? "fas fa-bookmark" : "far fa-bookmark"}></i>
                <span>
                  {bookmarks[currentScenario.id] === activeStepIndex ? "Bookmarked" : "Bookmark Step"}
                </span>
              </button>
            </div>

            {/* Stepper Progress bar */}
            <div className="stepper-nav">
              {currentScenario.steps.map((step, idx) => {
                const isStepActive = idx === activeStepIndex;
                const isStepCompleted = completedSteps[`${currentScenario.id}-${idx}`];
                const isStepBookmarked = bookmarks[currentScenario.id] === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`stepper-node ${isStepActive ? "active" : ""} ${isStepCompleted ? "completed" : ""} ${isStepBookmarked ? "bookmarked" : ""}`}
                  >
                    <span className="node-num">
                      {isStepCompleted ? <i className="fas fa-check"></i> : idx + 1}
                    </span>
                    <span className="node-title">{step.title.split(". ")[1] || step.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Step Panel */}
            {currentStep && (
              <div className="step-panel">
                <h3 className="step-title">{currentStep.title}</h3>

                {/* Practical Tips Checklist */}
                <div className="tips-section">
                  <h4><i className="fas fa-list-ul"></i> Actionable Checklist</h4>
                  <ul className="checklist">
                    {currentStep.tips.map((tip, index) => {
                      const checkboxId = `${currentScenario.id}-${activeStepIndex}-tip-${index}`;
                      return (
                        <li key={index} className="checklist-item">
                          <label className="checkbox-container">
                            <input
                              type="checkbox"
                              id={checkboxId}
                              defaultChecked={false}
                            />
                            <span className="checkmark"></span>
                            <span className="tip-text">{tip}</span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Critical legal rights block */}
                {currentStep.criticalRights && (
                  <div className="rights-alert-box">
                    <div className="rights-alert-icon">
                      <i className="fas fa-balance-scale"></i>
                    </div>
                    <div className="rights-alert-text">
                      <h5>Critical Legal Protection</h5>
                      <p>{currentStep.criticalRights}</p>
                    </div>
                  </div>
                )}

                {/* Step Action & Navigation Buttons */}
                <div className="step-footer">
                  <button
                    onClick={handlePrev}
                    disabled={activeStepIndex === 0}
                    className="nav-btn prev-btn"
                  >
                    <i className="fas fa-chevron-left"></i> Previous
                  </button>

                  <button
                    onClick={() => toggleStepCompleted(currentScenario.id, activeStepIndex)}
                    className={`complete-btn ${completedSteps[`${currentScenario.id}-${activeStepIndex}`] ? "completed" : ""}`}
                  >
                    {completedSteps[`${currentScenario.id}-${activeStepIndex}`] ? (
                      <>
                        <i className="fas fa-check-double"></i> Mark as Unread
                      </>
                    ) : (
                      "Mark Step as Read"
                    )}
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={activeStepIndex === stepsCount - 1}
                    className="nav-btn next-btn"
                  >
                    Next <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
