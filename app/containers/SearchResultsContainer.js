var React = require('react');
var PropTypes = React.PropTypes;
var SearchResults =require('../components/SearchResults');


var SearchResultsContainer = React.createClass({

    getInitialState: function(){
         return (
           {
             results: []
           }
         )
    },
    componentDidMount: function(){

    },
  render: function() {
    return (
      <SearchResults />
    );
  }

});

module.exports = SearchResultsContainer;
