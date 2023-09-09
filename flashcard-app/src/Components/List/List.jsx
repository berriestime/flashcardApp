import React, { useEffect, useState } from "react";
import styles from "./List.module.scss";
import ListItem from "../ListItem/ListItem";

function List() {
  const [data, setData] = useState([]);
  // const [copyedData, setСopyedData] = useState(null);

  useEffect(() => {
    fetch("./words.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // setСopyedData(data.slice());
      });
    return () => {};
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }

  const removeElementByIndex = (index) => {
    const updatedData = data.slice();
    updatedData.splice(index, 1);
    setData(updatedData);
  };

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
        {data.map((word, index) => (
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
