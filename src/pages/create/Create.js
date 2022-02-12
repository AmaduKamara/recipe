// styles
import { useState } from "react";

import "./Create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime);
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredient) => [...prevIngredient, ing]);
    }
    setNewIngredient("");
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a new Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              value={newIngredient}
              onchange={(e) => setNewIngredient(e.target.value)}
            />
            <button type="button" className="btn" onClick={handleAddIngredient}>
              Add
            </button>
          </div>
        </label>

        <label>
          <span>Recipe method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
