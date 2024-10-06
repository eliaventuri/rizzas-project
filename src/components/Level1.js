// components/Level1.js
import React, { useState, useEffect } from "react";
import "./Level1.css";

const images = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
  "pic5.jpg",
  "pic6.jpg",
  "pic7.jpg",
  "pic8.jpg",
];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function Level1({ onComplete }) {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    const shuffledCards = shuffleArray([...images, ...images]);
    setCards(
      shuffledCards.map((image, index) => ({
        id: index,
        image,
        flipped: false,
      }))
    );
  }, []);

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (cards[index].image === "pic6.jpg") {
      const audio = new Audio("sounds/card-flip.mp3");
      audio.play();
    }

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex].image === cards[secondIndex].image) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  useEffect(() => {
    if (matchedCards.length === cards.length && cards.length > 0) {
      onComplete();
    }
  }, [matchedCards, cards, onComplete]);

  return (
    <div className="level1-container">
      <h2 className="level1-title">Level 1!</h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${
              flippedCards.includes(index) || matchedCards.includes(index)
                ? "flipped"
                : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-front">
              <img src={`images/${card.image}`} alt="pic" />
            </div>
            <div className="card-back"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Level1;
