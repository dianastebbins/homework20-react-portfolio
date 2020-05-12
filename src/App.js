import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <AboutPage />
        </Route>
        <Route exact path="/portfolio">
          <PortfolioPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
