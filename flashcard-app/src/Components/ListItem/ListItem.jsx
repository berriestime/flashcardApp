import React, { useState } from "react";
import styles from "./ListItem.module.css";

function ListItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [englishWord, setEnglishWord] = useState(props.english);
  const [transcription, setTranscription] = useState(props.transcription);
  const [russian, setRussian] = useState(props.russian);
  const [tag, setTag] = useState(props.tags);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    setIsEditing(false);
  }

  function handleRevert() {
    setEnglishWord(props.english);
    setTranscription(props.transcription);
    setRussian(props.russian);
    setTag(props.tags);
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
    <div className={styles.tableRowT} id={props.id}>
      <div className={styles.tableCellT}>{props.id}</div>
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
          <button className={styles.btn}>Удалить</button>
        )}
      </div>
    </div>
  );
}

export default ListItem;
