var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var main = require('../components/Main');



var routes = (
  <Router history={hashHistory}>
      <Route path='/' component={main}>
      </Route>

  </Router>
);

module.exports = routes;
