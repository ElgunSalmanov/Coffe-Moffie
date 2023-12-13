import { Link } from "react-router-dom";
import "../../scss/_reset.scss";
import "./navbar.scss";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-button">
          <img src="src/assets/logo/logo.png" alt="logo" />
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
