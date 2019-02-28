import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SplashPage from './pages/SplashPage'
import Page1 from 


class App extends Component {
  render() {
    return ( <>
    <Router>
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/page2" component={Page2} />
        <Route exact path="/page3" component={Page3} />
        <Route component={ErrorPage404} />
      </Switch>
    </Router>
    </>
    )
  }
}

export default App
