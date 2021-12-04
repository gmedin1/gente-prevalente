import "../styles/Control.css";

function RightControl({ handleClick }) {
  return (
    <button onClick={handleClick} className="arrow-control">
      <img src="./right-arrow.png" alt="right arrow" width={25} height={25} />
    </button>
  );
}

export default RightControl;
