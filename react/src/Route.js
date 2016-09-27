import React from 'react'

import { Redirect, Route, Router, IndexRedirect, hashHistory } from 'react-router'

import App from './Container/App'
import PageOne from './Container/PageOne'
import PageTwo from './Container/PageTwo'

export default function () {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="one" />
        <Route path="one" component={PageOne}/>
        <Route path="two" component={PageTwo}/>
      </Route>
    </Router>
  )
}
