import "./Home.css";
import { useFetch } from "./../../hooks/useFetch";
const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <div className="loading">Loading...</div>}
      {data && data.map((recipe) => <h2 key={recipe.id}>{recipe.title}</h2>)}
    </div>
  );
};

export default Home;
