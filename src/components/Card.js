import CardBody from "./CardBody";
import CardFoot from "./CardFoot";
import "../styles/Card.css";

function Card({ option, index, handleNav }) {
  const { info } = option;

  if (index === 0) {
    return (
      <article className="card">
        <a
          className="active-option"
          href="#approvals"
          onClick={handleNav("approvals")}
        >
          <CardBody option={option} />
          <hr />
          <CardFoot info={info} />
        </a>
      </article>
    );
  }

  return (
    <article className="card">
      <CardBody option={option} />
      <hr />
      <CardFoot info={info} />
    </article>
  );
}

export default Card;
