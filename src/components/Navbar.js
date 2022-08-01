import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import "./Navbar.css";
import useTheme from "../hooks/useTheme";
import React from "react";

export default function Navbar() {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ backgroundColor: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking App</h1>
        </Link>
        <Searchbar />
        <Link to="/create">
          <h3>Create Recipe</h3>
        </Link>
      </nav>
    </div>
  );
}
