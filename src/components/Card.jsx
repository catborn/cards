import styles from "./Сard.module.css";

function Card(props) {
  return (
    <div className={styles.card} style={{ backgroundColor: props.color }}>
      <h2>{props.title}</h2>
      <p>руб {props.price} /месяц</p>
      <p>{props.speed}</p>
      <p>Объем включенного трафика не ограничен</p>
    </div>
  );
}

export default Card;
