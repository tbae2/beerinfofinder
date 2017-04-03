import React from 'react';
//var PropTypes = React.PropTypes;
import SearchBarContainer from '../containers/SearchBarContainer';
import TopNav from '../containers/NavTop';
import SearchResults from './SearchResults';

var main = React.createClass({

  render: function() {
    return (

      <div className="main-container">
              <TopNav />
        <SearchBarContainer />
        {this.props.children}
      </div>
    );
  }

});

export default main;
