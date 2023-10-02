import React, { Fragment, useState } from "react";
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

  const [learntWords, setLearntWords] = useState(0);

  const learnWord = (idx) => {
    if (words[idx].learned) return;
    words[idx].learned = true;
    setLearntWords(learntWords + 1);
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <button className={styles.btn} onClick={previousSlide}>
          Previous
        </button>
        <Card
          word={words[currentIndex]}
          key={currentIndex}
          idx={currentIndex}
          onTranslate={learnWord}
        />
        <button className={styles.btn} onClick={nextSlide}>
          Next
        </button>
      </div>
      <div>Выучено {learntWords}</div>
    </Fragment>
  );
};

export default Slider;
