import { useParams } from "react-router-dom";

// Styles
import "./Recipe.css";

const Recipe = () => {
  const { id } = useParams();

  return <div>Recipe</div>;
};

export default Recipe;
