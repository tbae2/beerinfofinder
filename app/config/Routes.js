var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var Main = require('../components/Main');



var routes = (
  <Router history={hashHistory}>
      <Route path='/' component={Main}>
      </Route>

  </Router>
);

module.exports = routes;
