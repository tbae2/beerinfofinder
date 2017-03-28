import React from 'react';
import { ReactRouter,Router,Route, IndexRoute,Link,browserHistory } from 'react-router';
import Main from '../components/Main'
import SearchResultsContainer from '../containers/SearchResultsContainer'
import Home from '../components/Home'
var Home = require('../components/Home');

var routes = (
  <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home}/>
        <Route path='results' component={SearchResultsContainer}>
            <Route path='filter' component={SearchResultsContainer} />
        </Route>
      </Route>
  </Router>
);

module.exports = routes;
