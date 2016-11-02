var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var main = require('../components/Main');
var SearchResultscontainer = require('../containers/SearchResultsContainer');


var routes = (
  <Router history={hashHistory}>
      <Route path='/' component={main}/>
      <Route path='results' component={SearchResultsContainer}/>

  </Router>
);

module.exports = routes;
