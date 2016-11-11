var React = require('react');
var PropTypes = React.PropTypes;
var SearchBarContainer = require('../containers/SearchBarContainer');
var SearchResultsContainer = require('../containers/SearchResultsContainer');

var Home = React.createClass({

  render: function() {
    return (
      <div className="main-container">
        
        <SearchResultsContainer />
      </div>
    );
  }

});

module.exports = Home;
