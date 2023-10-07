import React, { useState, useEffect } from "react";

const WordsContext = React.createContext();

function WordsContextProvider(props) {
  const [wordsApp, setWordsApp] = useState([]);

  useEffect(() => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => response.json())
      .then((wordsApp) => {
        setWordsApp(wordsApp);
        // throw new Error("Something went wrong");
      })
      .catch((e) => {
        console.error(e);
      });
    return () => {};
  }, []);

  if (wordsApp === null) {
    return <div>Loading...</div>;
  }

  const removeElementByIndex = (index) => {
    const updatedData = wordsApp.slice();

    updatedData.splice(index, 1);
    setWordsApp(updatedData);
  };

  return (
    <WordsContext.Provider value={{ wordsApp, removeElementByIndex }}>
      {props.children}
    </WordsContext.Provider>
  );
}

export { WordsContextProvider, WordsContext };
