var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var main = require('../components/Main');
var SearchResultsContainer = require('../containers/SearchResultsContainer');
var Home = require('../components/Home');

var routes = (
  <Router history={hashHistory}>
      <Route path='/' component={main}>
        <IndexRoute component={Home}/>
        <Route path='results' component={SearchResultsContainer}>
            <Route path='filter' component={SearchResultscontainer} />
        </Route>
      </Route>
  </Router>
);

module.exports = routes;
