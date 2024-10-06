import React from "react";
import styles from "./Сard.module.css";

function Card(props) {
  const cardStyle = {
    backgroundColor: props.color,
    height: props.price === 550 ? "360px" : "330px",
    width: props.price === 550 ? "290px" : "250px",
  };
  return (
    <div className={styles.card} style={cardStyle}>
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
