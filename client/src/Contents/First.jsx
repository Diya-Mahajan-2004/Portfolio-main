import React, { useEffect, useState } from "react";
import "../CSS/First.css";

function First({ onGetStartedClick }) {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setAnimationClass("slide-in");
    }, 1000);
  }, []);

  return (
    <div className={`first-container ${animationClass}`}>
      <h1 className="title">Welcome to My Portfolio</h1>
      <p className="description">Explore my projects, skills, and more.</p>
      <button className="btn-cta" onClick={onGetStartedClick}>Get Started</button>
    </div>
  );
}

export default First;
