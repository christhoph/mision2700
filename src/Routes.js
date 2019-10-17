import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Navbar, Footer, WhatsappButton } from "./core";
import Home from "./containers/Home";
import AboutUs from "./containers/AboutUs";
import Histories from "./containers/Histories";

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about-us' component={AboutUs} />
      <Route exact path='/histories' component={Histories} />
    </Switch>
    <WhatsappButton />
    <Footer />
  </Router>
);

export default Routes;