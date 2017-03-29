import React from 'react';
//var PropTypes = React.PropTypes;
import SearchBarContainer from '../containers/SearchBarContainer';
import TopNav from '../containers/NavTop';
import SearchResults from './SearchResults';

var main = React.createClass({

  render: function() {
    return (
      <TopNav/>
      <div className="main-container">

        <SearchBarContainer />
        {this.props.children}
      </div>
    );
  }

});

export default Main;
