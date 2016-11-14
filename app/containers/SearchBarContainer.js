var React = require('react');
var PropTypes = React.PropTypes;
var SearchBar = require('../components/SearchBar');

var SearchBarContainer = React.createClass({
    contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
      return {
        beeritem: ''
      }
    },
      handleUpdateQuery: function(e){
      //  console.log(e.target.value);
      //set state as the search is updated
        this.setState({
          beeritem: e.target.value
        })
      },
    handleSubmitQuery: function(e){
      //prevent the default form action in html/bootstrap
      e.preventDefault();

      //send state as prop through react router path

      this.context.router.push({
        pathname: '/results',
        state: {
          beeritem: this.state.beeritem
        }
       })

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
