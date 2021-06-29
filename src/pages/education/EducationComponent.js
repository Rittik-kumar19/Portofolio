import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import ExperienceImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <ExperienceImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Experience
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                A passionate Full Stack Software Developer <span></span>🚀
                having 3.5 years experience.
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                Currently working at Hilti Technology Solutions India
                @Hilti_Group (Pune,MH) on ON!Track 3.0 application. Click{" "}
                <a
                  href="https://www.youtube.com/watch?v=0g4_1qJGQA8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>here</span>
                </a>{" "}
                to learn more about it.
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Education;
