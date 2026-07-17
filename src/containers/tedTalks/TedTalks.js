import React, {useState, useEffect, useContext} from "react";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {tedTalksSection} from "../../portfolio";
import "./TedTalks.scss";

export default function TedTalks() {
  const {isDark} = useContext(StyleContext);
  const [watchedTalks, setWatchedTalks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("watchedTalks");
    if (saved) {
      try {
        setWatchedTalks(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const toggleWatched = id => {
    let updated;
    if (watchedTalks.includes(id)) {
      updated = watchedTalks.filter(item => item !== id);
    } else {
      updated = [...watchedTalks, id];
    }
    setWatchedTalks(updated);
    localStorage.setItem("watchedTalks", JSON.stringify(updated));
  };

  if (!tedTalksSection.display) {
    return null;
  }

  const {title, subtitle, talks} = tedTalksSection;
  const progressPercent = (watchedTalks.length / talks.length) * 100;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="tedtalks">
        <div className="ted-header-div">
          <h1
            className={
              isDark ? "dark-mode-text ted-header-text" : "ted-header-text"
            }
          >
            {title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode-text subTitle ted-subtitle"
                : "subTitle ted-subtitle"
            }
          >
            {subtitle}
          </p>
        </div>

        {/* Progress Tracker Bar */}
        <div
          className={
            isDark
              ? "ted-progress-container dark-mode-card"
              : "ted-progress-container"
          }
        >
          <div className="ted-progress-info">
            <span>
              Progress: {watchedTalks.length} of {talks.length} Talks Explored
            </span>
            <span>{Math.round(progressPercent)}%</span>
          </div>
          <div className="ted-progress-bar-bg">
            <div
              className="ted-progress-bar-fill"
              style={{width: `${progressPercent}%`}}
            ></div>
          </div>
        </div>

        {/* Talks Grid */}
        <div className="ted-grid">
          {talks.map(talk => {
            const isWatched = watchedTalks.includes(talk.id);
            return (
              <div
                key={talk.id}
                className={
                  isDark
                    ? `ted-card dark-mode-card ${isWatched ? "watched" : ""}`
                    : `ted-card ${isWatched ? "watched" : ""}`
                }
              >
                <div className="ted-card-header">
                  <div>
                    <h3 className="ted-title">{talk.title}</h3>
                    <span className="ted-speaker">by {talk.speaker}</span>
                  </div>
                  <div className="ted-badge">TED</div>
                </div>

                <div className="ted-video-container">
                  <iframe
                    src={`https://www.youtube.com/embed/${talk.embedId}`}
                    title={talk.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="ted-card-body">
                  <div className="ted-concept-section">
                    <strong>Key Concept:</strong> {talk.keyConcept}
                  </div>
                  <div className="ted-takeaway-section">
                    <strong>My Takeaway:</strong>
                    <p>{talk.takeaway}</p>
                  </div>
                </div>

                <div className="ted-card-footer">
                  <button
                    onClick={() => toggleWatched(talk.id)}
                    className={isWatched ? "btn-watched" : "btn-unwatched"}
                  >
                    {isWatched ? (
                      <>
                        <i className="fas fa-check-circle"></i> Explored
                      </>
                    ) : (
                      "Mark as Explored"
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
