import { useState } from "react";
import "../styles/SearchForm.css";

function SearchForm() {
  const [input, setInput] = useState("");
  const handleChange = (evt) => {
    setInput(evt.target.value);
  };
  return (
    <form className="search-form">
      <img src="./search.svg" alt="seach icon" />
      <input onChange={handleChange} value={input} placeholder="Buscar..." />
    </form>
  );
}

export default SearchForm;
