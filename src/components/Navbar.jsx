import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Avenger</h1>
        </Link>
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}

export default Navbar;
