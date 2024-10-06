import React from "react";
import { useState } from "react";
import styles from "./Сard.module.css";

function Card(props) {
  const [isSelected, setIsSelected] = useState(false);

  const cardStyle = {
    backgroundColor: props.color,
    height: props.price === 550 ? "380px" : "360px",
    width: props.price === 550 ? "290px" : "250px",
  };

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className={styles.card} style={cardStyle} onClick={handleClick}>
      {isSelected && <div className={styles.selected}>Тариф выбран</div>}
      <h2>{props.title}</h2>
      <p>руб</p>
      <p className={styles.price}>{props.price}</p>
      <p>в месяц</p>
      <p>До {props.speed} Мбит/сек</p>
      <p>Объем включенного трафика не ограничен</p>
    </div>
  );
}

export default Card;
