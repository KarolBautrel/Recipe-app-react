import "./Recipe.css";
import useFetch from "../../hooks/useFetch";
import { useParams, useHistory } from "react-router-dom";
import useTheme from "../../hooks/useTheme";

import React from "react";

export default function Recipe() {
  const { id } = useParams();
  const redirect = useHistory();
  const { mode } = useTheme();

  const { data, isLoading, isError } = useFetch(
    `http://localhost:8000/recipes/${id}`
  );

  if (isError) {
    <h2>Something</h2>;
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/recipes/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    redirect.push("/");
  };
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={`card ${mode}`}>
          <h1 className="recipe-title">
            {data.title}{" "}
            <button
              onClick={() => {
                handleDelete(data.id);
              }}
              className="delete-btn"
            >
              Delete
            </button>
          </h1>
          <p className="time">Time:{data.cookingTime} min</p>
          <ul>
            <h3 style={{ marginBottom: "5px" }}>Ingredients:</h3>
            {data.ingredients &&
              data.ingredients.map((data) => (
                <li key={data} className="list-group">
                  {data},
                </li>
              ))}
          </ul>
          <p>{data.method}</p>
        </div>
      )}
    </div>
  );
}
