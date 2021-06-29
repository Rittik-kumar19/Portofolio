import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";

function Educations(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="experience-card-container">
        {degrees.degrees.map((degree) => {
          return <DegreeCard degree={degree} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Educations;
