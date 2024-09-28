function Card(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.price}</p>
      <p>{props.speed}</p>
    </div>
  );
}

export default Card;
