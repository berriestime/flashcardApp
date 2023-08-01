import React, { useEffect, useState } from "react";
import styles from "./List.module.css";
import ListItem from "../ListItem/ListItem";

function List() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("./words.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
    return () => {};
  }, []);

  if (data === null) {
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
        {data.map((item) => (
          <div key={item.id}>
            <ListItem
              id={item.id}
              english={item.english}
              transcription={item.transcription}
              russian={item.russian}
              tags={item.tags}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
