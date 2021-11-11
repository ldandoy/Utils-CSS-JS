import React from 'react'

import { Link } from 'react-router-dom'

const MenuCss = () => {
    return <nav className="navbar navbar-h">
        <div className="navbar-title txt-uppercase">
        Doc CSS
        </div>
        <ul className="navbar-menu">
            <li className="navbar-item">
                <Link className="navbar-link" to="/alerts">Alerts</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/badges">Badges</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/buttons">Buttons</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/cards">Cards</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/colors">Colors</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/flex">Flex box</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/forms">Forms</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/grid">Grid</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/images">Images</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/navbar">Navbar</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/opacity">Opacity</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/pointer">Pointer</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/spacing">Spacing</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/structure">Structure</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/tables">Tables</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/texts">Texts</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/toasts">Toasts</Link>
            </li>
        </ul>
    </nav>
}

export default MenuCss
