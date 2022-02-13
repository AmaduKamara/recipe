import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";

// Styles
import "./Recipe.css";
// import { useFetch } from "./../../hooks/useFetch";
import { useTheme } from "./../../hooks/useTheme";

const Recipe = () => {
  // const url = "http://localhost:3000/recipes/" + id;
  // const { data: recipe, isPending, error } = useFetch(url);
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const { mode } = useTheme();

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("recipes")
      .doc(id)
      .get()
      .then((doc) => {
        // console.log(doc);
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError("Could not find that recipe");
        }
      });
  }, [id]);

  const handleUpdate = () => {
    projectFirestore.collection("recipes").doc(id).update({
      title: "Title Updated in Real-time",
    });
  };

  return (
    <div className={`recipe ${mode}`}>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
          <button type="button" onClick={handleUpdate}>
            Update title
          </button>
        </>
      )}
    </div>
  );
};

export default Recipe;
