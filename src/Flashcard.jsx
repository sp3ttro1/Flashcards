import React, { useState } from "react";
import flashcards from "../flashcardsData";
import "./Flashcard.css";

const Flashcard = () => {
    const [index, setIndex] = useState(0);

    const nextCard = () => {
        const randomIndex = Math.floor(Math.random() * flashcards.length);
        setIndex(randomIndex);
    };

    const { verb, meaning, example} = flashcards[index];

    return (
    <div className="flashcard-container">
        <h1>🌿 Learn Spanish Verbs</h1>
        <div className="card">
            <h2>{verb}</h2>
            <p><strong>Meaning:</strong> {meaning}</p>
            <p><em>{example}</em></p>
        </div>
        <button onClick={nextCard}>→</button>
    </div>
  );
};

export default Flashcard;