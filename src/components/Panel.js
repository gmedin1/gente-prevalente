import "../styles/Panel.css";
import User from "./User";

function Panel() {
  return (
    <ul className="panel">
      <li>
        <img src="./cogs.svg" alt="cogs icon" />
        <p>Administracion</p>
      </li>
      <li>
        <img src="./suitcase.svg" alt="suitcase icon" />
        <p>Empleo</p>
        <img src="./arrow-down.svg" alt="arrow down icon" />
      </li>
      <li>
        <img src="./clipboard.svg" alt="clipboard icon" />
        <p>Mi CV</p>
      </li>
      <li>
        <User name="German" />
      </li>
    </ul>
  );
}

export default Panel;
