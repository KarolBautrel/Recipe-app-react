import "./Create.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
export default function Create() {
  // const [title, setTitle] = useState("");
  // const [method, setMethod] = useState("");
  // const [cookingTime, setCookingTime] = useState(0);
  const redirect = useHistory();
  const [recipe, setRecipe] = useState({
    title: "",
    method: "",
    cookingTime: 0,
    ingredients: [],
  });
  const [status, setStatus] = useState(false);
  const [method, setMethod] = useState("");
  const recipeForm = [
    {
      name: "title",
      id: "title",
      placeholder: "Title",
      type: "title",
    },

    {
      name: "cookingTime",
      id: "cookingTime",
      placeholder: "Cooking Time",
      type: "number",
    },
    {
      name: "ingredients",
      id: "ingredients",
      placeholder: "ingredients",
      type: "ingredients",
    },
  ];

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const splitIndegrients = (ingredients) => {
    return ingredients.split(",");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ingredients = splitIndegrients(recipe.ingredients);
    setStatus(true);
    fetch("http://localhost:8000/recipes/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: recipe.title,
        method: method,
        cookingTime: recipe.cookingTime,
        ingredients: ingredients,
      }),
    });
    setStatus(false);
    redirect.push("/");
  };

  return (
    <div className="create">
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        {recipeForm.map(({ name, id, placeholder, type }) => (
          <div key={id}>
            <label>
              <input
                className="create-recipe-form"
                id={id}
                key={id}
                type={type}
                placeholder={placeholder}
                name={name}
                value={recipeForm[name]}
                onChange={handleChange}
              />
            </label>
          </div>
        ))}
        <label>
          <textarea
            className="create-recipe-form"
            value={method}
            onChange={(e) => {
              setMethod(e.target.value);
            }}
          />
        </label>
        {status ? (
          <button className="create-btn">Loading...</button>
        ) : (
          <button className="create-btn">Add recipe</button>
        )}
      </form>
    </div>
  );
}
