import {Link} from "react-router-dom";
import logo from "../assets/logo.avif";
import "../App.css";

const Navbar = () =>{
    return(
        <nav className="navbar">
          <div className="logo-container">
            <img src={logo} alt="NayePankh Logo" className="logo"/>
            <span>NayePankh Foundation</span>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
    )
}

export default Navbar;