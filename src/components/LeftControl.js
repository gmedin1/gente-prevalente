import "../styles/Control.css";

function LeftControl({ handleClick }) {
  return (
    <button onClick={handleClick} className="arrow-control">
      <img src="./left-arrow.png" alt="right arrow" width={25} />
    </button>
  );
}

export default LeftControl;
