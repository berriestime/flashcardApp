import React, { Fragment, useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ word }) => {
  const [translate, setTranslate] = useState(false);
  const translation = () => {
    setTranslate(!translate);
  };

  const text = translate ? word.russian : word.english;

  return (
    <Fragment>
      <div className={styles.cardDefault}>
        <div>{text}</div>
        <button onClick={translation}>Показать перевод</button>
      </div>
    </Fragment>
  );
};

export default Card;
