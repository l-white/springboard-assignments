import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="eat">Eat</Link> |{" "}
        <Link to="drink">Drink</Link>
      </nav>
    </div>
  );
}

export default Nav;