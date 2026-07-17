import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }

  const renderProjectCard = (project, i) => {
    return (
      <div
        key={i}
        className={
          isDark
            ? "dark-mode project-card project-card-dark"
            : "project-card project-card-light"
        }
      >
        <div className="project-detail">
          <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
            {project.projectName}
          </h5>
          <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
            {project.projectDesc}
          </p>

          {project.techStack && (
            <div className="tech-tags-container">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className={
                    isDark
                      ? "tech-tag tech-tag-dark"
                      : "tech-tag tech-tag-light"
                  }
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {project.footerLink && project.footerLink.length > 0 ? (
            <div className="project-card-footer">
              {project.footerLink.map((link, idx) => {
                return (
                  <span
                    key={idx}
                    className={
                      isDark ? "dark-mode project-tag-btn" : "project-tag-btn"
                    }
                    onClick={() => openUrlInNewTab(link.url)}
                  >
                    {link.name}
                  </span>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
            style={{marginBottom: "3rem"}}
          >
            {bigProjects.subtitle}
          </p>

          {/* Software Development Portfolio */}
          <div className="project-category-section">
            <h2
              className={
                isDark ? "dark-mode category-heading" : "category-heading"
              }
            >
              <i className="fas fa-code icon-spacing"></i> Software Development
              Portfolio
            </h2>
            <div className="projects-container">
              {bigProjects.softwareProjects.map((project, i) =>
                renderProjectCard(project, i)
              )}
            </div>
          </div>

          {/* Graphic Design & Branding Portfolio */}
          <div className="project-category-section">
            <h2
              className={
                isDark ? "dark-mode category-heading" : "category-heading"
              }
            >
              <i className="fas fa-paint-brush icon-spacing"></i> Graphic Design
              & Branding
            </h2>
            <div className="projects-container">
              {bigProjects.designProjects.map((project, i) =>
                renderProjectCard(project, i)
              )}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
