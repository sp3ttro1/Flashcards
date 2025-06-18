import { useState } from 'react'
import Flashcard from './Flashcard'
import flashcards from './flashcardsData';
import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleNext = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashcards.length);
    } while (newIndex === currentIndex);

    setCurrentIndex(newIndex);
    setIsFlipped(false);
  };

  const currentCard = flashcards[currentIndex];

  return (
    <div className="App">
      <header>
        <h1>🌿 Spanish Verbs Flashcards 🌿</h1>
        <p>Click the card to flip. Click next to study more.</p>
        <p>Total Cards: {flashcards.length}</p>
      </header>
      <Flashcard
        verb={currentCard.verb}
        meaning={currentCard.meaning}
        example={currentCard.example}
        isFlipped={isFlipped}
        onClick={handleFlip}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}


export default App
