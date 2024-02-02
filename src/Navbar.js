import { NavLink, Link } from "react-router-dom";
import "./Navbar.css"
/** Navbar for ShareBnb. 
 * 
 * App -> Navbar
*/

function Navbar() {
  return (
    <nav className="Navbar navbar navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ShareBnB
        </Link>
        <ul className="navbar-nav ms-auto">
        <li className="nav-item me-4">
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