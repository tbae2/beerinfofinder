var React = require('react');
var PropTypes = React.PropTypes;
var SearchBarContainer = require('../containers/SearchBarContainer');
var TopNav = require('./NavTop');
var SearchResults = require('./SearchResults');



var main = React.createClass({

  render: function() {
    return (
      <div className="main-container">
        <TopNav/>
        <SearchBarContainer />
        <SearchResults />
      </div>
    );
  }

});

module.exports = main;
