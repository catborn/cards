import styles from "./Сard.module.css";

function Card(props) {
  return (
    <div className={styles.card} style={{ backgroundColor: props.color }}>
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
