import React from "react";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <span className="greeting-eyebrow">Based in Kano, Nigeria</span>
          <h1 className="greeting-text">
            <span className="name-accent">Abdulrahman</span>
            <br />
            Ilah.
          </h1>
          <p className="greeting-text-p">{greeting.subTitle}</p>
          <SocialMedia />
          <div className="button-greeting-div">
            <Button text="View my work" href="#projects" />
            <Button text="Contact me" href="#contact" />
          </div>
        </div>
        <div className="greeting-image-div">
          {illustration.animated ? (
            <DisplayLottie animationData={landingPerson} />
          ) : (
            <img
              alt="Abdulrahman Ilah — Designer & Developer"
              src={
                require("../../assets/images/abdulrahman_avatar.jpg").default ||
                require("../../assets/images/abdulrahman_avatar.jpg")
              }
            />
          )}
        </div>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
      </div>
    </div>
  );
}
