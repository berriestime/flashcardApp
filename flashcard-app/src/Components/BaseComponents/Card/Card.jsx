import React, { Fragment } from "react";
import styles from "./Card.module.scss";

const Card = ({ word }) => {
  return (
    <Fragment>
      <div className={styles.cardDefault}>
        <div>{word.english}</div>
        {/* <div>{word.russian}</div> */}
        <button>Показать перевод</button>
      </div>
    </Fragment>
  );
};

export default Card;
