import React from 'react'
import { Link } from 'react-router-dom'

import ThemeMode from '../components/ThemeMode'

const Navbar = () => {
    return <nav className="navbar oc-lightgreen navbar-dark navbar-fixed-top">
        <div className="navbar-title">
            <div>
                <Link className="navbar-link" to="/">
                    <img src="icon_overconsulting.png" alt="logo" />
                </Link>
                <Link className="navbar-link" to="/">Utils CSS v1</Link>
            </div>
            <i className="navbar-menu-icon">&#9776;</i>
        </div>
        <div className="navbar-content-menu">
            <ul className="navbar-menu navbar-menu-left">
                
            </ul>
            <ul className="oc-darkgreen-txt navbar-menu navbar-menu-right">
                <ThemeMode />
                <li className="navbar-item">
                    <a className="navbar-link" rel="noreferrer" href="https://github.com/ldandoy/Utils-CSS-JS" target="_blank">Repos GitHub</a>
                </li>
                <li className="navbar-item">
                    <a className="navbar-link" href="examples" target="_blank">Examples</a>
                </li>
            </ul>
        </div>
    </nav>
}

export default Navbar