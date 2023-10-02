import React, { Fragment, useState } from "react";
import Slider from "../../Components/Slider/Slider.js";
import words from "../../Components/Slider/words.json";

function TrainPage(props) {
  const totalWordsToLearn = words.length;
  const [wordsLearnedCount, setWordsLearnedCount] = useState(0);
  const handleWordsLearnedCount = (newValue) => {
    setWordsLearnedCount(newValue);
  };

  return (
    <Fragment>
      <main>
        <Slider
          wordsLearnedCount={wordsLearnedCount}
          onChangeWordsLearnedCount={handleWordsLearnedCount}
        />
        <p>
          {"Изучено слов: " + wordsLearnedCount} из {totalWordsToLearn}
        </p>
      </main>
    </Fragment>
  );
}

export default TrainPage;
