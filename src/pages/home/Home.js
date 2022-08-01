import "./Home.css";
import useFetch from "../../hooks/useFetch";
import React, { useState, useEffect } from "react";
import RecipesList from "./RecipesList";
export default function Home() {
  const [url, setUrl] = useState("http://localhost:8000/recipes");

  const { data, isLoading, isError } = useFetch(url);

  if (isError) {
    return (
      <div>
        <h3>Something went wrong </h3>
      </div>
    );
  }

  return (
    <div className="home">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <RecipesList data={data} isLoading={isLoading} />
      )}
    </div>
  );
}
