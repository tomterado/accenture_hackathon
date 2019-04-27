import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";

import Index from "views/Index.jsx";
import LandingPage from "views/examples/LandingPage.jsx";
import RegisterPage from "views/examples/RegisterPage.jsx";
import ProfilePage from "views/examples/ProfilePage.jsx";
import Signup from "./views/IndexSections/Signup";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={props => <Index {...props} />} />
      <Route path="/signup" component ={Signup}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
