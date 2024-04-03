import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss"

import { ReactComponent as SharebnbLogo } from "./sharebnb-logo-text-color.svg";

/** Navbar for ShareBnb. 
 * 
 * App -> Navbar
*/

function Navbar({ search }) {
  return (
    <nav className="Navbar navbar navbar-expand-md">
      <div className="container-fluid">
        <Link 
          className="navbar-brand"
          onClick={() => search()} 
          to="/"
        >
          <SharebnbLogo />
        </Link>
        <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/add-property">
            Add Property
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar;