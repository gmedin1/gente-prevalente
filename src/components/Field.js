import "../styles/Field.css";

function Field({ title, text }) {
  return (
    <div>
      <p className="f__title">{title}</p>
      <p className="f__text">{text}</p>
      <hr />
    </div>
  );
}

export default Field;
