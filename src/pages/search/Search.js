import "./Search.css";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import React from "react";
import { Link } from "react-router-dom";

export default function Search() {
  const queryString = useLocation();
  const url = `http://localhost:8000/recipes${queryString.search}`;
  const { data, isLoading, isError } = useFetch(url);
  if (isError) {
    <div>Something went wrong</div>;
  }
  return (
    <div className="recipe-list">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        data.map((data) => (
          <div key={data.id} className="card">
            <h2>{data.title}</h2>
            <p>Time: {data.cookingTime}</p>
            <p>{data.method.slice(0, 40)}...</p>
            <Link to={`/recipes/${data.id}`}>Cook This </Link>
          </div>
        ))
      )}
    </div>
  );
}
