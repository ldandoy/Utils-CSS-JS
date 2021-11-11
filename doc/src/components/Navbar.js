import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <nav className="navbar navbar-v navbar-bordered-b bg-blue-800 navbar-dark sticky-top">
        <div className="navbar-title">
            <div>
                <Link className="navbar-link" to="/">
                    <img src="icon_overconsulting.png" alt="logo" />
                </Link>
                <Link className="navbar-link" to="/">Utils CSS</Link>
            </div>
            <i className="navbar-menu-icon">&#9776;</i>
        </div>
        <div className="navbar-content-menu">
            <ul className="navbar-menu-left">
                <li className="navbar-item">
                    <Link className="navbar-link" to="/">Doc CSS</Link>
                    <Link className="navbar-link" to="/">Doc JS</Link>
                </li>
            </ul>
            <ul className="navbar-menu-right">
                <li className="navbar-item">
                    <a className="navbar-link" rel="noreferrer" href="https://github.com/ldandoy/Utils-CSS-JS" target="_blank">Repos GitHub</a>
                </li>
                <li className="navbar-item">
                    <a className="navbar-link" href="example.html" target="_blank">Examples</a>
                </li>
            </ul>
        </div>
    </nav>
}

export default Navbar
