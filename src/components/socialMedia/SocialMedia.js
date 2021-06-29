import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.gitlab}
        className="icon-button gitlab"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-gitlab"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-google"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.chess}
        className="icon-button chess"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fas fa-chess-knight"></i>
        <span></span>
      </a>
      <a
        className="icon-button whatsapp"
        rel="noopener noreferrer"
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=%2B919140839081&text&app_absent=0"
      >
        <i className="fab fa-whatsapp"> </i>
      </a>
    </div>
  );
}
