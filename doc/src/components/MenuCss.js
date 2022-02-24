import React from 'react'

import { Link } from 'react-router-dom'

const MenuCss = () => {
    return <nav className="navbar navbar-h">
        <div className="navbar-title txt-uppercase">
        Doc CSS
        </div>
        <ul className="navbar-menu">
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/alerts">Alerts</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/badges">Badges</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/borders">Borders</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/buttons">Buttons</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/cards">Cards</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/colors">Colors</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/flexbox">Flexbox</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/forms">Forms</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/grid">Grid</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/hero">Hero</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/images">Images</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/menu">Menu</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/navbar">Navbar</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/opacity">Opacity</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/pointer">Pointer</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/shadow">Shadow</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/spacing">Spacing</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/structure">Structure</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/tables">Tables</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/texts">Texts</Link>
            </li>
            <li className="navbar-item x x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/toasts">Toasts</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/utils">Utils</Link>
            </li>
            <li className="navbar-item x">
                <div className='arrow-right'></div>
                <Link className="navbar-link" to="/all">Resume</Link>
            </li>
        </ul>
    </nav>
}

export default MenuCss
