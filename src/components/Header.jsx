import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Amit R. Logo" />
                </Link>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                            Work
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
