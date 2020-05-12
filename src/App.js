import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from "./pages/ContactPage"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AboutPage />
        </Route>
        <Route exact path="/portfolio">
          <PortfolioPage/>
        </Route>
        <Route exact path ="/contact">
          <ContactPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
