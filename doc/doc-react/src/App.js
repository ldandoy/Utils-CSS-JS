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
import ImagesPage from "./pages/ImagesPage";
import TablesPage from "./pages/TablesPage";
import BadgesPage from "./pages/BadgesPage";
import AlertsPage from "./pages/AlertsPage";
import ToastsPage from "./pages/ToastsPage";
import ColorsPage from "./pages/ColorsPage";

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
                    <ul class="navbar-menu-left">
                    </ul>
                    <ul class="navbar-menu-right">
                        <li class="navbar-item">
                          <a class="navbar-link" href="example.html" target="_blank">Examples</a>
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
                <li class="navbar-item">
                  <Link to="/images">Images</Link>
                </li>
                <li class="navbar-item">
                  <Link to="/tables">Tables</Link>
                </li>
                <li class="navbar-item">
                  <Link to="/badges">Badges</Link>
                </li>
                <li class="navbar-item">
                  <Link to="/alerts">Alerts</Link>
                </li>
                <li class="navbar-item">
                  <Link to="/toasts">Toasts</Link>
                </li>
                <li class="navbar-item">
                  <Link to="/colors">Colors</Link>
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
            <Route path="/images">
              <ImagesPage />
            </Route>
            <Route path="/tables">
              <TablesPage />
            </Route>
            <Route path="/badges">
              <BadgesPage />
            </Route>
            <Route path="/alerts">
              <AlertsPage />
            </Route>
            <Route path="/toasts">
              <ToastsPage />
            </Route>
            <Route path="/colors">
              <ColorsPage />
            </Route>
          </Switch>
        </main>

        <footer>
            
        </footer>
    </Router>
  );
}

export default App;
