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
        this.setState({
          beeritem: e.target.value
        })
      },
    handleSubmitQuery: function(e){
      //prevent the default form action in html/bootstrap
      e.preventDefault();
    //  console.log(this.context);
      //console.log('the query button was pushed ' + this.state.beeritem);
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
        query={this.state.beeritem}
      />
    );
  }

});

module.exports = SearchBarContainer;
