import "../styles/Button.css";

function Button({ icon, text, handleClick, modifier }) {
  return (
    <button
      className={`${modifier ? "disabled" : ""} button`}
      onClick={handleClick}
    >
      <span>
        <img src={icon} alt="icon" />
      </span>
      {text}
    </button>
  );
}

export default Button;
