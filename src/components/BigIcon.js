import "../styles/BigIcon.css";

function BigIcon({ src, alt }) {
  return (
    <div className="big-icon">
      <img src={src} alt={alt} width={55} />
    </div>
  );
}

export default BigIcon;
