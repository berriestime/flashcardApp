import React, { useState } from "react";
import List from "../List/List.jsx";
import styles from "./SetModule.module.css";

function SetModule(props) {
  const [list, setList] = useState(false);
  const handleClick = () => {
    setList(true);
  };
  return (
    <div>
      {list ? (
        <div>
          <List />
        </div>
      ) : (
        <button className={styles.btn} onClick={handleClick}>
          Добавить учебный модуль
        </button>
      )}
    </div>
  );
}

export default SetModule;

// В этом примере мы используем хук useState, чтобы создать состояние `list`, которое является массивом полей.
// При клике на кнопку "Добавить поле" вызывается функция `addItem`, которая добавляет новый элемент (строку "Новое поле")
// в список с помощью метода `setList`. Затем мы отображаем список полей в элементе `ul`, используя метод `map` для
// преобразования каждого элемента в компонент `li`. Каждый элемент списка имеет уникальный ключ (`key={index}`) для
//  оптимизации производительности React.

// При каждом клике на кнопку "Добавить поле" будет добавлено новое поле в список.
