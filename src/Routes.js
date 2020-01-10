import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Signin from "./Pages/Main/Signin/Signin";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
