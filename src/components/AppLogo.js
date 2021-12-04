import "../styles/AppLogo.css";

function AppLogo({ src, alt, title }) {
  return (
    <div className="nav-logo">
      <img src={src} alt={alt} />
      <p>{title}</p>
    </div>
  );
}

export default AppLogo;
