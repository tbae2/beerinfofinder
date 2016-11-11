var React = require('react');
var PropTypes = React.PropTypes;
var SearchResults =require('../components/SearchResults');


var SearchResultsContainer = React.createClass({

    getInitialState: function(){
         return (
           {
             beeritem: ''
           }
         )
    },
    componentDidMount: function(){
      var query = this.props.location.state;
        console.log(query.beeritem);
        this.setState({
          beeritem: query.beeritem
        })
    },
  render: function() {
    return (
      <SearchResults onUpdate={this.state.beeritem}/>
    )
  }

});

module.exports = SearchResultsContainer;
