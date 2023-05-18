
import React from "react";
import "./Circular_progress.css";


const CircularProgress = ({ progressAngle }) => {
  progressAngle = 303;
  const calculateGradient = (angle) => {
    const sectorColor = "grey"; // Color for the sector
    const remainingColor = "#00FF00"; // Color for the remaining circle
    const gradientAngle = angle + 90;
    return `conic-gradient(from ${gradientAngle}deg, ${sectorColor} 0%, ${sectorColor} ${angle}deg, ${remainingColor} ${angle}deg, ${remainingColor} 100%)`;
  };

  return (
    <div className="circle">
      <div
        className="sector"
        style={{
          background: calculateGradient(progressAngle),
        }}
      ></div>
    </div>
  );
};

export default CircularProgress
