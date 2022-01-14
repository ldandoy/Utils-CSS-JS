import React from 'react'
import HighlightCode from "../components/HighlightCode";

const NavbarPage = () => {
    return <div className="mlr-20">
        <section>
            <h1 className="title-page">Navbar</h1>
        </section>
        <p>
            Customised <span className="badge bg-success">Alert Messages</span> made simple with the <span className="badge bg-success">Alert Component</span>.
        </p>

        <section className="mtb-60 ">
            <div className="row mb-20">
                <div className="col">
                    <h2>Exemple complet</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <nav className="bg-blue-800 navbar-dark navbar">
                        <div className="navbar-container-fluid">
                            <div className="navbar-title txt-white-100">
                                <div>
                                    <a className="navbar-link" href="/">
                                        <img src="icon_overconsulting.png" alt="logo" />
                                    </a>
                                    <a className="navbar-link" href="/">Titre du site</a>
                                </div>
                                <i className="navbar-menu-icon">&#9776;</i>
                            </div>
                            <div className="navbar-content-menu">
                                <ul className="navbar-menu navbar-menu-left">
                                    <li className="navbar-item">
                                        <a className="navbar-link" href="/">Lien 1</a>
                                    </li>
                                    <li className="navbar-item dropdown">
                                        <a className="navbar-link" href="/">Lien 2</a>
                                        <ul className="navbar-ss-menu bg-blue-800">
                                            <li className="navbar-item">
                                                <li className="navbar-item">
                                                    <a className="navbar-link" href="/">Sous Lien 1</a>
                                                </li>
                                                <li className="navbar-item">
                                                    <a className="navbar-link" href="/">Sous Lien 2</a>
                                                </li>
                                                <li className="navbar-item">
                                                    <a className="navbar-link" href="/">Sous Lien 3</a>
                                                </li>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="navbar-item">
                                        <a className="navbar-link" href="/">Lien 3</a>
                                    </li>
                                </ul>
                                <ul className="navbar-menu navbar-menu-right">
                                    <li className="navbar-item">
                                        <a className="navbar-link" href="/">Lien 1</a>
                                    </li>
                                    <li className="navbar-item dropdown">
                                        <a className="navbar-link" href="/">Lien 2</a>
                                        <ul className="navbar-ss-menu bg-blue-800">
                                            <li className="navbar-item">
                                                <li className="navbar-item">
                                                    <a className="navbar-link" href="/">Sous Lien 1</a>
                                                </li>
                                                <li className="navbar-item">
                                                    <a className="navbar-link" href="/">Sous Lien 2</a>
                                                </li>
                                                <li className="navbar-item">
                                                    <a className="navbar-link" href="/">Sous Lien 3</a>
                                                </li>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="navbar-item">
                                        <a className="navbar-link" href="/">Lien 3</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <HighlightCode code={`<nav class="bg-blue-800 navbar-dark navbar navbar-fixed-top">
    <div class="navbar-container-fluid">
        <div class="navbar-title txt-white-100">
            <div>
                <a class="navbar-link" href="/">
                    <img src="icon_overconsulting.png" alt="logo" />
                </a>
                <a class="navbar-link" href="/">Titre du site</a>
            </div>
            <i class="navbar-menu-icon">&#9776;</i>
        </div>
        <div class="navbar-content-menu">
            <ul class="navbar-menu navbar-menu-left">
                <li class="navbar-item">
                    <a class="navbar-link" href="/">Lien 1</a>
                </li>
                <li class="navbar-item dropdown">
                    <a class="navbar-link" href="/">Lien 2</a>
                    <ul class="navbar-ss-menu bg-blue-800">
                        <li class="navbar-item">
                            <li class="navbar-item">
                                <a class="navbar-link" href="/">Sous Lien 1</a>
                            </li>
                            <li class="navbar-item">
                                <a class="navbar-link" href="/">Sous Lien 2</a>
                            </li>
                            <li class="navbar-item">
                                <a class="navbar-link" href="/">Sous Lien 3</a>
                            </li>
                        </li>
                    </ul>
                </li>
                <li class="navbar-item">
                    <a class="navbar-link" href="/">Lien 3</a>
                </li>
            </ul>
            <ul class="navbar-menu navbar-menu-right">
                <li class="navbar-item">
                    <a class="navbar-link" href="/">Lien 1</a>
                </li>
                <li class="navbar-item dropdown">
                    <a class="navbar-link" href="/">Lien 2</a>
                    <ul class="navbar-ss-menu bg-blue-800">
                        <li class="navbar-item">
                            <li class="navbar-item">
                                <a class="navbar-link" href="/">Sous Lien 1</a>
                            </li>
                            <li class="navbar-item">
                                <a class="navbar-link" href="/">Sous Lien 2</a>
                            </li>
                            <li class="navbar-item">
                                <a class="navbar-link" href="/">Sous Lien 3</a>
                            </li>
                        </li>
                    </ul>
                </li>
                <li class="navbar-item">
                    <a class="navbar-link" href="/">Lien 3</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`} translateToReact language="htmlbars" />
                </div>
            </div>
        </section>

        <section className="mtb-60 ">
            <div className="row mb-20">
                <div className="col">
                    <h2>Exemple font dark</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <nav className="navbar bg-purple-900 navbar-dark txt-white-200">
                        <div className="navbar-title">
                            <a id="home" href="/" className="navbar-link">Titre</a>
                            <i className="navbar-menu-icon">☰</i>
                        </div>
                        <div className="navbar-content-menu">
                            <ul className="navbar-menu-left">
                                <li className="navbar-item"><a href="/" className="navbar-link">Item 1</a></li>
                                <li className="navbar-item"><a href="/" className="navbar-link">Item 2</a></li>
                            </ul>
                            <ul className="navbar-menu-right">
                                <li className="navbar-item"><a href="/" className="navbar-link">Item 1</a></li>
                                <li className="navbar-item"><a href="/" className="navbar-link">Item 2</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <HighlightCode code={`<nav class="navbar bg-blue-800 navbar-dark">
    <div class="navbar-title">
        <a id="home" href="/" class="navbar-link">Titre</a>
        <i className="navbar-menu-icon">☰</i>
    </div>
    <div class="navbar-content-menu">
        <ul class="navbar-menu-left">
            <li class="navbar-item"><a href="/" class="navbar-link">Item 1</a></li>
            <li class="navbar-item"><a href="/" class="navbar-link">Item 2</a></li>
        </ul>
        <ul class="navbar-menu-right">
            <li class="navbar-item"><a href="/" class="navbar-link">Item 1</a></li>
            <li class="navbar-item"><a href="/" class="navbar-link">Item 2</a></li>
        </ul>
    </div>
</nav>`} language="htmlbars" />
                </div>
            </div>
        </section>

        <section className="mb-60 ">
            <div className="row mb-20">
                <div className="col">
                    <h2>Exemple font light</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <nav className="navbar bg-blue-100 navbar-light">
                        <div className="navbar-title">
                            <a id="home" href="/" className="navbar-link">Titre</a>
                            <i className="navbar-menu-icon">☰</i>
                        </div>
                        <div className="navbar-content-menu">
                            <ul className="navbar-menu-left">
                                <li className="navbar-item"><a href="/" className="navbar-link">Item 1</a></li>
                                <li className="navbar-item"><a href="/" className="navbar-link">Item 2</a></li>
                            </ul>
                            <ul className="navbar-menu-right">
                                <li className="navbar-item"><a href="/" className="navbar-link">Item 1</a></li>
                                <li className="navbar-item"><a href="/" className="navbar-link">Item 2</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <HighlightCode code={`<nav class="navbar bg-blue-800 navbar-dark txt-white-200">
    <div class="navbar-title">
        <a id="home" href="/" class="navbar-link">Titre</a>
        <i className="navbar-menu-icon">☰</i>
    </div>
    <div class="navbar-content-menu">
        <ul class="navbar-menu-left">
            <li class="navbar-item"><a href="/" class="navbar-link">Item 1</a></li>
            <li class="navbar-item"><a href="/" class="navbar-link">Item 2</a></li>
        </ul>
        <ul class="navbar-menu-right">
            <li class="navbar-item"><a href="/" class="navbar-link">Item 1</a></li>
            <li class="navbar-item"><a href="/" class="navbar-link">Item 2</a></li>
        </ul>
    </div>
</nav>`} translateToReact language="htmlbars" />
                </div>
            </div>
        </section>
        <section className="mb-60 ">
            <h2>Autre class possible</h2>
            <div className="row">
                <div className="col">
                    <HighlightCode 
                        code={`<!-- For a sticky on top navbar: .navbar-fixed-top -->
<nav class="navbar bg-blue-800 navbar-dark navbar-fixed-top"></nav>

<!-- Pour qu'il y est une bordure tout autours: .navbar-bordered -->
<nav class="navbar bg-blue-800 navbar-dark navbar-bordered"></nav>

<!-- For a on top border: .navbar-bordered-t -->
<nav class="navbar bg-blue-800 navbar-dark navbar-bordered-t"></nav>

<!-- For a left border: .navbar-bordered-l -->
<nav class="navbar bg-blue-800 navbar-dark navbar-bordered-l"></nav>

<!-- For a bottom border: .navbar-bordered-b -->
<nav class="navbar bg-blue-800 navbar-dark navbar-bordered-b"></nav>

<!-- For a right border: .navbar-bordered-r -->
<nav class="navbar bg-blue-800 navbar-dark navbar-bordered-r"></nav>`} translateToReact language="htmlbars"  />
                </div>
            </div>
        </section>
    </div>
}

export default NavbarPage
