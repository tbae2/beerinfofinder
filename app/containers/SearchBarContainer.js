var React = require('react');
var PropTypes = React.PropTypes;
var SearchBar = require('../components/SearchBar');

var SearchBarContainer = React.createClass({
    contextTypes: {
      router: React.PropTypes.object
    },
    getInitialState: function(){
      return {
        query: ''
      }
    },
      handleUpdateQuery: function(e){
        this.setState({
          query: e.target.value
        })
      },
    handleSubmitQuery: function(e){
      //prevent the default form action in html/bootstrap
      e.preventDefault();
      console.log('the query button was pushed ' + this.state.query);
    },
  render: function() {
    return (
      <SearchBar onSubmitQuery={this.handleSubmitQuery}
        onQueryUpdate={this.handleUpdateQuery}
      />
    );
  }

});

module.exports = SearchBarContainer;
