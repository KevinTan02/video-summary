import { Link } from 'react-router'
import './Navbar.css'
import mainLogo from '/mainLogo.webp'
// maybe switch to navlink

const Navbar = () => {
    return(
        <nav className="navbar">
            <ul className="navbar-links">
                <li><img className="logo" src={mainLogo} alt="Main Logo" /> </li>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/upload"> Upload </Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;