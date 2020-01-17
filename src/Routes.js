import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Signin from "./Pages/Signin/Signin";
import Create from "./Pages/Create/Create";
import Header from "./Component/Header/Header";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/Header" component={Header} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
