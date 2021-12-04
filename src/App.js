import Navbar from "./components/Navbar";
import Approvals from "./pages/Approvals";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  const toPage = (page) => (event) => {
    event.preventDefault();
    setPage(page);
  };

  const getContent = () => {
    if (page === "home") {
      return <Home handleNav={toPage} />;
    } else {
      return <Approvals />;
    }
  };

  return (
    <div>
      <Navbar />
      {getContent()}
    </div>
  );
}

export default App;
