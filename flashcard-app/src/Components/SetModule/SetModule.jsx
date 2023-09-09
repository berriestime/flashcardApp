import React, { useState } from "react";
import List from "../List/List.jsx";
import styles from "./SetModule.module.scss";

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
