import React from 'react'

import { Link } from 'react-router-dom'

const MenuCss = () => {
    return <nav className="navbar navbar-h oc-darkgreen pb-70">
        <div className="navbar-title txt-uppercase oc-white-txt pt-40">
        Doc CSS
        </div>
        <ul className="navbar-menu">
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/alerts">Alerts</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/badges">Badges</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/borders">Borders</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/buttons">Buttons</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/cards">Cards</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/colors">Colors</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/flexbox">Flexbox</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/forms">Forms</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/grid">Grid</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/hero">Hero</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/images">Images</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/menu">Menu</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/navbar">Navbar</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/opacity">Opacity</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/pointer">Pointer</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/shadow">Shadow</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/spacing">Spacing</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/structure">Structure</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/tables">Tables</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/texts">Texts</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/toasts">Toasts</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/utils">Utils</Link>
            </li>
            <li className="navbar-item">
                <div className='arrow-right'></div>
                <Link className="navbar-link x" to="/all">Resume</Link>
            </li>
        </ul>
    </nav>
}

export default MenuCss
