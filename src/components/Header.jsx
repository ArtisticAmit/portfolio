import { NavLink, Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <picture>
                        <source srcSet="/favicon_dark.svg" media="(prefers-color-scheme: dark)" />
                        <img src="/favicon_light.svg" alt="Amit R. Logo" />
                    </picture>
                </Link>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                            Work
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
