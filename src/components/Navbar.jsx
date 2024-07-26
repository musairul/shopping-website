import { Link } from "react-router-dom";
import navbarStyles from "../styles/navbar.module.css";

function Navbar({ numCartItems }) {
  return (
    <>
      <ul className={navbarStyles.navbar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <Link to="/shop">Shop</Link>
        <li>
          <Link to="/cart">
            Cart:<span> {numCartItems}</span>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
