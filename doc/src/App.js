import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
import SpacingPage from "./pages/SpacingPage";
import FlexPage from "./pages/FlexPage";
import GridPage from "./pages/GridPage";
import ShadowPage from "./pages/ShadowPage";
import StructurePage from "./pages/StructurePage";
import NavbarPage from "./pages/NavbarPage";
import OpacityPage from "./pages/OpacityPage";
import PointerPage from "./pages/PointerPage";

function App() {

  return (
    <Router>
      <header>
            {/* Top Nav */}
            <nav className="navbar navbar-v navbar-bordered-b bg-blue-800 txt-white-200 sticky-top">
                <div className="navbar-title">
                  <Link className="navbar-link" to="/">Utils CSS</Link>
                </div>
                <div className="navbar-content-menu">
                    <ul className="navbar-menu-left">
                      <li className="navbar-item">
                        <Link className="navbar-link" to="/">Doc</Link>
                      </li>
                    </ul>
                    <ul className="navbar-menu-right">
                        <li className="navbar-item">
                          <a className="navbar-link" href="https://github.com/ldandoy/Utils-CSS-JS" target="_blank">Repos GitHub</a>
                        </li>
                        <li className="navbar-item">
                          <a className="navbar-link" href="example.html" target="_blank">Examples</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        
        {/* Side Nav */}
        <aside className="aside aside-fixed bg-blue-300">
            <nav className="navbar navbar-h">
                <div className="navbar-title txt-uppercase">
                  CSS
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
                <div className="navbar-title txt-uppercase">
                  JS
                </div>
            </nav>
        </aside>
        
        <main className="container-aside">
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
            <Route path="/spacing">
              <SpacingPage />
            </Route>
            <Route path="/structure">
              <StructurePage />
            </Route>
            <Route path="/shadow">
              <ShadowPage />
            </Route>
            <Route path="/grid">
              <GridPage />
            </Route>
            <Route path="/flex">
              <FlexPage />
            </Route>
            <Route path="/opacity">
              <OpacityPage />
            </Route>
            <Route path="/navbar">
              <NavbarPage />
            </Route>
            <Route path="/pointer">
              <PointerPage />
            </Route>
          </Switch>
        </main>

        <footer>
            
        </footer>
    </Router>
  );
}

export default App;
