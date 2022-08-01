import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Searchbar.css";
import useTheme from "../hooks/useTheme";

export default function Searchbar() {
  const { color } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const redirect = useHistory();
  const handleClick = () => {
    redirect.push(`/search?q=${searchTerm}`);
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button
        onClick={handleClick}
        className="search-button"
        style={{ backgroundColor: color }}
      >
        Search
      </button>
    </div>
  );
}
