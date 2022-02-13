import { useEffect, useState } from "react";
// import { useFetch } from "../../hooks/useFetch";
import { projectFirestore } from "../../firebase/config";

import RecipeList from "../../components/RecipeList";

import "./Home.css";

const Home = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  // Used for json-server data
  // const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("recipes")
      .get()
      .then((snapshot) => {
        // console.log(snapshot);
        if (snapshot.empty) {
          setError("No recipes to load");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            // console.log(doc);
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <div className="loading">Loading...</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
