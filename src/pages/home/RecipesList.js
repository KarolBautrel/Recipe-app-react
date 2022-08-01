import "./RecipesList.css";
import { Link } from "react-router-dom";
import React from "react";
import useTheme from "../../hooks/useTheme";

export default function RecipesList({ data }) {
  const { mode } = useTheme();

  return (
    <div className="recipe-list">
      {data.map((data) => (
        <div key={data.id} className={`card ${mode}`}>
          <h2>{data.title}</h2>
          <p>Time: {data.cookingTime}</p>
          <p>{data.method.slice(0, 40)}...</p>
          <Link to={`/recipes/${data.id}`}>Cook This </Link>
        </div>
      ))}
    </div>
  );
}
