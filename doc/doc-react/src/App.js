import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./dist/utils-css.min.css";

import GetStartedPage from "./pages/GetStartedPage";
import CardsPage from "./pages/CardsPage";
import TextsPage from "./pages/TextsPage";
import FormsPage from "./pages/FormsPage";
import ButtonsPage from "./pages/ButtonsPage";


function App() {

  return (
    <Router>
      <header>
            {/* Top Nav */}
            <nav class="navbar navbar-v navbar-bordered-b bg-blue-800 txt-white-200 sticky-top">
                <div class="navbar-title">
                  <Link class="navbar-link" to="/">Doc</Link>
                </div>
                <div class="navbar-content-menu">
                    <ul class="navbar-menu-left"></ul>
                    <ul class="navbar-menu-right">
                        <li class="navbar-item">
                          <Link class="navbar-link" to="/">Utils-CSS</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        {/* Side Nav */}
        <div class="navbar-content-menu mt-80">
            <ul class="navbar-menu-left">
                <li class="navbar-item">
                  <Link to="/cards">Cards</Link>
                </li>
                <li class="navbar-item">
                  <Link to="/texts">Texts</Link>
                </li>
                <li class="navbar-item">
                  <Link to="/forms">Forms</Link>
                </li>
                <li class="navbar-item">
                  <Link to="/buttons">Buttons</Link>
                </li>
            </ul>
        </div>
        <main class="container">
          <Switch>
            <Route path="/" exact>
              <GetStartedPage />
            </Route>
            <Route path="/cards">
              <CardsPage />
            </Route>
            <Route path="/texts">
              <TextsPage />
            </Route>
            <Route path="/forms">
              <FormsPage />
            </Route>
            <Route path="/buttons">
              <ButtonsPage />
            </Route>
          </Switch>
        </main>

        <footer>
            
        </footer>
    </Router>
  );
}

export default App;
