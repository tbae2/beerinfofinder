import React from 'react';
//var PropTypes = React.PropTypes;
var SearchBarContainer = require('../containers/SearchBarContainer');
var TopNav = require('../containers/NavTop');
var SearchResults = require('./SearchResults');



var main = React.createClass({

  render: function() {
    return (
      <div className="main-container">
        <TopNav/>
        <SearchBarContainer />
        {this.props.children}
      </div>
    );
  }

});

export default Main;
