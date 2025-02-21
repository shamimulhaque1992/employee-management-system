import React from "react";
import "./LoadingIndicator.css";

const LoadingIndicator: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingIndicator;
