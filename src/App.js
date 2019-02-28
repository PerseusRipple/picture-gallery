import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SplashPage from "./pages/SplashPage";
import CategoryList from "./pages/CategoryList";
import PhotoList from "./pages/PhotoList";
import PhotoDetail from "./pages/PhotoDetail";
import ErrorPage404 from "./pages/ErrorPage404";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={CategoryList} />
            <Route exact path="/:category" component={PhotoList} />

            {/* <Route exact path="/PhotoList" component={PhotoList} />
            <Route exact path="/PhotoDetail" component={PhotoDetail} />
            <Route component={ErrorPage404} /> */}
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
