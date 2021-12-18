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
            <div class="row">
                <div class="col">
                    <nav class="navbar bg-blue-800 navbar-dark txt-white-200">
                        <div class="navbar-title">
                            <a id="home" href="#" class="navbar-link">Titre</a>
                            <i class="navbar-menu-icon">☰</i>
                        </div>
                        <div class="navbar-content-menu">
                            <ul class="navbar-menu-left">
                                <li class="navbar-item"><a href="#" class="navbar-link">Item 1</a></li>
                                <li class="navbar-item"><a href="#" class="navbar-link">Item 2</a></li>
                            </ul>
                            <ul class="navbar-menu-right">
                                <li class="navbar-item"><a href="#" class="navbar-link">Item 1</a></li>
                                <li class="navbar-item"><a href="#" class="navbar-link">Item 2</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <HighlightCode codeHtml={`<nav class="navbar bg-blue-800 navbar-dark">
    <div class="navbar-title">
        <a id="home" href="#" class="navbar-link">Titre</a>
        <i className="navbar-menu-icon">☰</i>
    </div>
    <div class="navbar-content-menu">
        <ul class="navbar-menu-left">
            <li class="navbar-item"><a href="#" class="navbar-link">Item 1</a></li>
            <li class="navbar-item"><a href="#" class="navbar-link">Item 2</a></li>
        </ul>
        <ul class="navbar-menu-right">
            <li class="navbar-item"><a href="#" class="navbar-link">Item 1</a></li>
            <li class="navbar-item"><a href="#" class="navbar-link">Item 2</a></li>
        </ul>
    </div>
</nav>`} language="htmlbars" codeReact={`<nav className="navbar bg-blue-800 navbar-dark">
    <div className="navbar-title">
        <a id="home" href="#" className="navbar-link">Titre</a>
    </div>
    <div className="navbar-content-menu">
        <ul className="navbar-menu-left">
            <li className="navbar-item"><a href="#" className="navbar-link">Item 1</a></li>
            <li className="navbar-item"><a href="#" className="navbar-link">Item 2</a></li>
        </ul>
        <ul className="navbar-menu-right">
            <li className="navbar-item"><a href="#" className="navbar-link">Item 1</a></li>
            <li className="navbar-item"><a href="#" className="navbar-link">Item 2</a></li>
        </ul>
    </div>
</nav>`} />
                </div>
            </div>
        </section>
        <section className="mb-60 ">
            <div class="row">
                <div class="col">
                    <nav class="navbar bg-blue-100 navbar-light">
                        <div class="navbar-title">
                            <a id="home" href="#" class="navbar-link">Titre</a>
                            <i class="navbar-menu-icon">☰</i>
                        </div>
                        <div class="navbar-content-menu">
                            <ul class="navbar-menu-left">
                                <li class="navbar-item"><a href="#" class="navbar-link">Item 1</a></li>
                                <li class="navbar-item"><a href="#" class="navbar-link">Item 2</a></li>
                            </ul>
                            <ul class="navbar-menu-right">
                                <li class="navbar-item"><a href="#" class="navbar-link">Item 1</a></li>
                                <li class="navbar-item"><a href="#" class="navbar-link">Item 2</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <HighlightCode codeHtml={`<nav class="navbar bg-blue-800 navbar-dark txt-white-200">
    <div class="navbar-title">
        <a id="home" href="#" class="navbar-link">Titre</a>
        <i className="navbar-menu-icon">☰</i>
    </div>
    <div class="navbar-content-menu">
        <ul class="navbar-menu-left">
            <li class="navbar-item"><a href="#" class="navbar-link">Item 1</a></li>
            <li class="navbar-item"><a href="#" class="navbar-link">Item 2</a></li>
        </ul>
        <ul class="navbar-menu-right">
            <li class="navbar-item"><a href="#" class="navbar-link">Item 1</a></li>
            <li class="navbar-item"><a href="#" class="navbar-link">Item 2</a></li>
        </ul>
    </div>
</nav>`} language="htmlbars" codeReact={`<nav className="navbar bg-blue-800 navbar-dark txt-white-200">
    <div className="navbar-title">
        <a id="home" href="#" className="navbar-link">Titre</a>
    </div>
    <div className="navbar-content-menu">
        <ul className="navbar-menu-left">
            <li className="navbar-item"><a href="#" className="navbar-link">Item 1</a></li>
            <li className="navbar-item"><a href="#" className="navbar-link">Item 2</a></li>
        </ul>
        <ul className="navbar-menu-right">
            <li className="navbar-item"><a href="#" className="navbar-link">Item 1</a></li>
            <li className="navbar-item"><a href="#" className="navbar-link">Item 2</a></li>
        </ul>
    </div>
</nav>`} />
                </div>
            </div>
        </section>
        <section className="mb-60 ">
            <h2>Autre class possible</h2>
            <div class="row">
                <div class="col">
                    <HighlightCode 
                        codeHtml={`<!-- For a sticky on top navbar: .sticky-top -->
<nav class="navbar bg-blue-800 navbar-dark sticky-top"></nav>

<!-- Pour qu'il y est une bordure tout autours: .navbar-bordered -->
<nav class="navbar bg-blue-800 navbar-dark navbar-bordered"></nav>

<!-- For a on top border: .navbar-bordered-t -->
<nav class="navbar bg-blue-800 navbar-dark navbar-bordered-t"></nav>

<!-- For a left border: .navbar-bordered-l -->
<nav class="navbar bg-blue-800 navbar-dark navbar-bordered-l"></nav>

<!-- For a bottom border: .navbar-bordered-b -->
<nav class="navbar bg-blue-800 navbar-dark navbar-bordered-b"></nav>

<!-- For a right border: .navbar-bordered-r -->
<nav class="navbar bg-blue-800 navbar-dark navbar-bordered-r"></nav>`} 
                        language="htmlbars" 
                        codeReact={`<!-- For a sticky on top navbar: .sticky-top -->
<nav className="navbar bg-blue-800 navbar-dark sticky-top"></nav>

<!-- Pour qu'il y est une bordure tout autours: .navbar-bordered -->
<nav className="navbar bg-blue-800 navbar-dark navbar-bordered"></nav>

<!-- For a on top border: .navbar-bordered-t -->
<nav className="navbar bg-blue-800 navbar-dark navbar-bordered-t"></nav>

<!-- For a left border: .navbar-bordered-l -->
<nav className="navbar bg-blue-800 navbar-dark navbar-bordered-l"></nav>

<!-- For a bottom border: .navbar-bordered-b -->
<nav className="navbar bg-blue-800 navbar-dark navbar-bordered-b"></nav>

<!-- For a right border: .navbar-bordered-r -->
<nav className="navbar bg-blue-800 navbar-dark navbar-bordered-r"></nav>`} />
                </div>
            </div>
        </section>
    </div>
}

export default NavbarPage
