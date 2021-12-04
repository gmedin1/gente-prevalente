import "../styles/Logo.css";

function Logo({ src, alt }) {
  return (
    <div className="logo-container">
      <img className="logo" src={src} alt={alt} />
    </div>
  );
}

export default Logo;
