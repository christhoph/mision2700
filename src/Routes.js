import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Footer } from "./core";
import Home from "./containers/Home";

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
