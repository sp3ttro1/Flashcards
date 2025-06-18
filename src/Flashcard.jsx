import React, { useState } from "react";
import "./Flashcard.css";

const Flashcard = ({ verb, meaning, example, isFlipped, onClick }) => {
  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      {isFlipped ? (
        <div className="card-back">
          <h3>{meaning}</h3>
          <p><em>{example}</em></p>
        </div>
      ) : (
        <div className="card-front">
          <h2>{verb}</h2>
        </div>
      )}
    </div>
  );
};

export default Flashcard;