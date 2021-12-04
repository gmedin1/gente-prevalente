import BigIcon from "../components/BigIcon";
import "../styles/CardBody.css";

function CardBody({ option }) {
  const { icon, title } = option;
  return (
    <div className="card-body">
      <BigIcon src={icon} alt="icon for options" />
      <h2 className="card-body-title">{title}</h2>
    </div>
  );
}

export default CardBody;
