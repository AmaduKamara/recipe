import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";

import "./Home.css";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <div className="loading">Loading...</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
