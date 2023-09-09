import React, { useState } from "react";
import styles from "./ListItem.module.scss";

function ListItem({ word, index, removeElementByIndex }) {
  const [isEditing, setIsEditing] = useState(false);
  const [englishWord, setEnglishWord] = useState(word.english);
  const [transcription, setTranscription] = useState(word.transcription);
  const [russian, setRussian] = useState(word.russian);
  const [tag, setTag] = useState(word.tags);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    setIsEditing(false);
  }

  function handleRevert() {
    setEnglishWord(word.english);
    setTranscription(word.transcription);
    setRussian(word.russian);
    setTag(word.tags);
    setIsEditing(!isEditing);
  }

  const handleNameChange = (e) => {
    setEnglishWord(e.target.value);
  };

  const handleTranscriptionChange = (e) => {
    setTranscription(e.target.value);
  };

  const handleRussianChange = (e) => {
    setRussian(e.target.value);
  };

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  return (
    <div className={styles.tableRowT} id={word.id}>
      <div className={styles.tableCellT}>{word.id}</div>
      {isEditing ? (
        <input
          type="text"
          value={englishWord}
          className={styles.tableCellT}
          onChange={handleNameChange}
        />
      ) : (
        <div className={styles.tableCellT}>{englishWord}</div>
      )}
      {isEditing ? (
        <input
          type="text"
          value={transcription}
          className={styles.tableCellT}
          onChange={handleTranscriptionChange}
        />
      ) : (
        <div className={styles.tableCellT}>{transcription}</div>
      )}
      {isEditing ? (
        <input
          type="text"
          value={russian}
          className={styles.tableCellT}
          onChange={handleRussianChange}
        />
      ) : (
        <div className={styles.tableCellT}>{russian}</div>
      )}
      {isEditing ? (
        <input
          type="text"
          value={tag}
          className={styles.tableCellT}
          onChange={handleTagChange}
        />
      ) : (
        <div className={styles.tableCellT}>{tag}</div>
      )}
      <div className={styles.tableCellT}>
        {isEditing ? (
          <button className={styles.btn} onClick={handleSave}>
            Сохранить
          </button>
        ) : (
          <button className={styles.btn} onClick={handleEdit}>
            Изменить
          </button>
        )}
        {isEditing ? (
          <button className={styles.btn} onClick={handleRevert}>
            Отменить изменения
          </button>
        ) : (
          <button
            className={styles.btn}
            onClick={() => removeElementByIndex(index)}
          >
            Удалить
          </button>
        )}
      </div>
    </div>
  );
}

export default ListItem;
