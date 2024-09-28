function Card(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>руб {props.price} /месяц</p>
      <p>{props.speed}</p>
      <p>Объем включенного трафика не ограничен</p>
    </div>
  );
}

export default Card;
