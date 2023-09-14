import React, { useState } from "react";
import styles from "./Slider.module.scss";
import words from "./words.json";
import Card from "./../BaseComponents/Card/Card.jsx";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === words.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? words.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={previousSlide}>
        Previous
      </button>
      <Card word={words[currentIndex]} key={currentIndex} />
      <button className={styles.btn} onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Slider;
