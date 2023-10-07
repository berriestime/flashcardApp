import React, { useContext } from "react";
import styles from "./List.module.scss";
import ListItem from "../ListItem/ListItem";
import { WordsContext } from "../../Context";

function List() {
  const { wordsApp, removeElementByIndex } = useContext(WordsContext);

  if (wordsApp === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.title}>Список всех существующих слов:</div>
      <div>
        <div className={styles.tableRowH}>
          <div className={styles.tableCellH}>Номер</div>
          <div className={styles.tableCellH}>Название</div>
          <div className={styles.tableCellH}>Транскрипция</div>
          <div className={styles.tableCellH}>Перевод</div>
          <div className={styles.tableCellH}>Тема</div>
          <div className={styles.tableCellH}></div>
        </div>
        {wordsApp.map((word, index) => (
          <div key={word.id}>
            <ListItem
              word={word}
              index={index}
              removeElementByIndex={removeElementByIndex}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
