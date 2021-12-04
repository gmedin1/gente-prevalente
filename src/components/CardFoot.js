import "../styles/CardFoot.css";

function CardFoot({ info }) {
  return (
    <div className="card-foot">
      <img className="card-foot-icon" src="./clock.svg" alt="clock icon" />
      {info}
    </div>
  );
}

export default CardFoot;
