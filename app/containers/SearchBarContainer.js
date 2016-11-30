var React = require('react');
var PropTypes = React.PropTypes;
var SearchBar = require('../components/SearchBar');

var SearchBarContainer = React.createClass({
    contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
      return {
        beeritem: '',
        searchType: 'beername'
      }
    },
      handleUpdateQuery: function(e){
      //  console.log(e.target.value);
      //set state as the search is updated
        this.setState({
          beeritem: e.target.value
        })
      },
      searchSelectChange: function(e){
        this.setState({
          searchType: e.target.value
        });

      },
    handleSubmitQuery: function(e){
      //prevent the default form action in html/bootstrap
      e.preventDefault();

      //send state as prop through react router path

      this.context.router.push({
        pathname: '/results',
        state: {
          beeritem: this.state.beeritem,
          searchType: this.state.searchType
        }
       })

    },
  render: function() {
    return (
      <SearchBar onSubmitQuery={this.handleSubmitQuery}
        onQueryUpdate={this.handleUpdateQuery}
        onSelectChange={this.searchSelectChange}

      />
    );
  }

});

module.exports = SearchBarContainer;
