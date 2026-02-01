import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss"

import { ReactComponent as SharebnbLogo } from "../../images/sharebnb-logo-text-color.svg";

/** Navbar for ShareBnb. 
 * 
 * Props:
 * - search: function to call in parent
 * 
 * App -> Navbar
*/

function Navbar({ search }) {

  return (
    <nav className="Navbar navbar navbar-expand-md sticky-top">
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
          <NavLink className="nav-link p-0 mx-2" to="/add-property">
            Add Property
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar;