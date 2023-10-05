import React, { useState } from "react";
import styles from "./ListItem.module.scss";

function ListItem({ word, index, removeElementByIndex }) {
  const [isEditing, setIsEditing] = useState(false);
  const [englishWord, setEnglishWord] = useState(word.english);
  const [transcription, setTranscription] = useState(word.transcription);
  const [russian, setRussian] = useState(word.russian);
  const [tag, setTag] = useState(word.tags);
  const [error, setError] = useState("");

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave(e) {
    e.preventDefault();
    setIsEditing(false);
    setError("");
    console.log({ englishWord, transcription, russian, tag });
  }

  function handleRevert() {
    setEnglishWord(word.english);
    setTranscription(word.transcription);
    setRussian(word.russian);
    setTag(word.tags);
    setIsEditing(!isEditing);
    setNameValid(true);
    setTranscriptionValid(true);
    setRussianValid(true);
    setTagValid(true);
    setError("");
  }

  const [nameValid, setNameValid] = useState(true);
  const [transcriptionValid, setTranscriptionValid] = useState(true);
  const [russianValid, setRussianValid] = useState(true);
  const [tagValid, setTagValid] = useState(true);
  const canSave = nameValid && transcriptionValid && russianValid && tagValid;

  /**
   * eto jsdoc
   * @type {React.ChangeEventHandler<HTMLInputElement>}
   */
  const handleNameChange = (e) => {
    setNameValid(Boolean(e.target.value.trim()));
    if (e.target.value.trim() === "") {
      setError("Поле не может быть пустым");
    }
    setEnglishWord(e.target.value);
  };

  const handleTranscriptionChange = (e) => {
    setTranscriptionValid(Boolean(e.target.value.trim()));
    if (e.target.value.trim() === "") {
      setError("Поле не может быть пустым");
    }
    setTranscription(e.target.value);
  };

  const handleRussianChange = (e) => {
    setRussianValid(Boolean(e.target.value.trim()));
    if (e.target.value.trim() === "") {
      setError("Поле не может быть пустым");
    }
    setRussian(e.target.value);
  };

  const handleTagChange = (e) => {
    setTagValid(Boolean(e.target.value.trim()));
    if (e.target.value.trim() === "") {
      setError("Поле не может быть пустым");
    }
    setTag(e.target.value);
  };

  return (
    <form onSubmit={handleSave}>
      <div className={styles.tableRowT} id={word.id}>
        <div className={styles.tableCellT}>{word.id}</div>
        <input
          className={[
            styles.tableCellT,
            !nameValid && styles["highlighted-error"],
          ].join(" ")}
          disabled={!isEditing}
          onChange={handleNameChange}
          type="text"
          value={englishWord}
        />
        <input
          className={[
            styles.tableCellT,
            !transcriptionValid && styles["highlighted-error"],
          ].join(" ")}
          disabled={!isEditing}
          onChange={handleTranscriptionChange}
          type="text"
          value={transcription}
        />
        <input
          type="text"
          value={russian}
          className={[
            styles.tableCellT,
            !russianValid && styles["highlighted-error"],
          ].join(" ")}
          onChange={handleRussianChange}
          disabled={!isEditing}
        />
        <input
          type="text"
          value={tag}
          className={[
            styles.tableCellT,
            !tagValid && styles["highlighted-error"],
          ].join(" ")}
          onChange={handleTagChange}
          disabled={!isEditing}
        />
        <div className={styles.tableCellT}>
          {isEditing && (
            <>
              <button type="submit" className={styles.btn} disabled={!canSave}>
                Сохранить
              </button>
              <button className={styles.btn} onClick={handleRevert}>
                Отменить изменения
              </button>
            </>
          )}
          {!isEditing && (
            <>
              <button className={styles.btn} onClick={handleEdit}>
                Изменить
              </button>
              <button
                className={styles.btn}
                onClick={() => removeElementByIndex(index)}
              >
                Удалить
              </button>
            </>
          )}
        </div>
      </div>
      {error && <p>{error}</p>}
    </form>
  );
}

export default ListItem;
