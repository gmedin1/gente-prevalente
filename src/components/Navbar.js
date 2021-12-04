import AppLogo from "./AppLogo";
import SearchForm from "./SearchForm";
import "../styles/Navbar.css";
import Panel from "./Panel";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <AppLogo
          src="./genteprevalente.png"
          alt="App Logo"
          title="Gente PreValente"
        />
        <SearchForm />
        <Panel />
      </div>
    </nav>
  );
}

export default Navbar;
