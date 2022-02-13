import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

import "./Navbar.css";
import Searchbar from "./Searchbar";

function Navbar() {
  const { color } = useContext(ThemeContext);

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Avenger</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}

export default Navbar;
