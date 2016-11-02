var React = require('react');
var PropTypes = React.PropTypes;
var ReactBootstrap = require('react-bootstrap');
var SearchBar = require('./SearchBar');
var TopNav = require('./NavTop');
var SearchResults = require('./SearchResults');



var main = React.createClass({

  render: function() {
    return (
      <div className="main-container">
        <TopNav/>
        <SearchBar />
        <SearchResults />
      </div>
    );
  }

});

module.exports = main;
