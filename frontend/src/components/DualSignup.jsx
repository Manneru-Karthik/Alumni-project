import React, { useState } from "react";
import AlumniSignup from "./AlumniSignup";
import StudentSignup from "./StudentSignup";
import "./DualSignup.css";

const DualSignup = () => {
  const [isAlumni, setIsAlumni] = useState(true);

  const handleToggle = () => {
    setIsAlumni(!isAlumni);
  };

  return (
    <div className="dual-signup-container">
      <div className="toggle-buttons">
        <button
          className={`toggle-button ${isAlumni ? "active" : ""}`}
          onClick={() => setIsAlumni(true)}
        >
          Alumni
        </button>
        <button
          className={`toggle-button ${!isAlumni ? "active" : ""}`}
          onClick={() => setIsAlumni(false)}
        >
          Student
        </button>
      </div>
      <div className="signup-wrapper">
        {isAlumni ? <AlumniSignup /> : <StudentSignup />}
      </div>
    </div>
  );
};

export default DualSignup;