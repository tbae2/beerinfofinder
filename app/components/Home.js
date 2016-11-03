var React = require('react');
var PropTypes = React.PropTypes;
var SearchBarContainer = require('../containers/SearchBarContainer');


var Home = React.createClass({

  render: function() {
    return (
      <div className="main-container">
        <SearchBarContainer />
      </div>
    );
  }

});

module.exports = Home;
