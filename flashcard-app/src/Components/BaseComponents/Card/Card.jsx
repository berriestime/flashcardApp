import React, { Fragment, useState, useRef, useEffect } from "react";
import styles from "./Card.module.scss";

const Card = ({ word, idx, onTranslate }) => {
  const ref = useRef(null);
  useEffect(() => {
    // Устанавливаем фокус на блок при монтировании компонента
    ref.current.focus();
  }, []);
  const [translate, setTranslate] = useState(false);
  const translation = () => {
    setTranslate(!translate);
    onTranslate(idx);
  };

  const text = translate ? word.russian : word.english;

  return (
    <Fragment>
      <div className={styles.cardDefault}>
        <div>{text}</div>
        <button ref={ref} onClick={translation}>
          Показать перевод
        </button>
      </div>
    </Fragment>
  );
};

export default Card;
