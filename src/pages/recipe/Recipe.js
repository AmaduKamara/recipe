import { useParams } from "react-router-dom";

// Styles
import "./Recipe.css";
import { useFetch } from "./../../hooks/useFetch";

const Recipe = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, isPending, error } = useFetch(url);

  return (
    <div className="recipe">
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {recipe && <h1>{recipe.title} </h1>}
    </div>
  );
};

export default Recipe;
