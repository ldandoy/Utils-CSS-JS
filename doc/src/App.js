import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LayoutCss from './layouts/LayoutCss'

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
import AllPage from "./pages/AllPage";
import BordersPage from "./pages/BordersPage";
import MenuPage from "./pages/MenuPage";
import HeroPage from "./pages/HeroPage";
import UtilsPage from "./pages/UtilsPage";

function App() {

  return (
    <Router>
          <Switch>
            <Route path="/" exact>
              <LayoutCss>
                <GetStartedPage />
              </LayoutCss>
            </Route>
            <Route path="/cards">
              <LayoutCss>
                <CardsPage />
              </LayoutCss>
            </Route>
            <Route path="/texts">
              <LayoutCss>
                <TextsPage />
              </LayoutCss>
            </Route>
            <Route path="/all">
              <LayoutCss>
                <AllPage />
              </LayoutCss>
            </Route>
            <Route path="/forms">
              <LayoutCss>
                <FormsPage />
              </LayoutCss>
            </Route>
            <Route path="/buttons">
              <LayoutCss>
                <ButtonsPage />
              </LayoutCss>
            </Route>
            <Route path="/images">
              <LayoutCss>
                <ImagesPage />
              </LayoutCss>
            </Route>
            <Route path="/tables">
              <LayoutCss>
                <TablesPage />
              </LayoutCss>
            </Route>
            <Route path="/badges">
              <LayoutCss>
                <BadgesPage />
              </LayoutCss>
            </Route>
            <Route path="/alerts">
              <LayoutCss>
                <AlertsPage />
              </LayoutCss>
            </Route>
            <Route path="/toasts">
              <LayoutCss>
                <ToastsPage />
              </LayoutCss>
            </Route>
            <Route path="/colors">
              <LayoutCss>
                <ColorsPage />
              </LayoutCss>
            </Route>
            <Route path="/shadow">
              <LayoutCss>
                <ShadowPage />
              </LayoutCss>
            </Route>
            <Route path="/spacing">
              <LayoutCss>
                <SpacingPage />
              </LayoutCss>
            </Route>
            <Route path="/structure">
              <LayoutCss>
                <StructurePage />
              </LayoutCss>
            </Route>
            <Route path="/shadow">
              <LayoutCss>
                <ShadowPage />
              </LayoutCss>
            </Route>
            <Route path="/grid">
              <LayoutCss>
                <GridPage />
              </LayoutCss>
            </Route>
            <Route path="/flexbox">
              <LayoutCss>
                <FlexPage />
              </LayoutCss>
            </Route>
            <Route path="/opacity">
              <LayoutCss>
                <OpacityPage />
              </LayoutCss>
            </Route>
            <Route path="/navbar">
              <LayoutCss>
                <NavbarPage />
              </LayoutCss>
            </Route>
            <Route path="/pointer">
              <LayoutCss>
                <PointerPage />
              </LayoutCss>
            </Route>
            <Route path="/borders" >
              <LayoutCss>
                <BordersPage />
              </LayoutCss>
            </Route>
            <Route path="/menu" >
              <LayoutCss>
                <MenuPage />
              </LayoutCss>
            </Route>
            <Route path="/hero" >
              <LayoutCss>
                <HeroPage />
              </LayoutCss>
            </Route>
            <Route path="/utils" >
              <LayoutCss>
                <UtilsPage />
              </LayoutCss>
            </Route>
          </Switch>
    </Router>
  );
}

export default App;
