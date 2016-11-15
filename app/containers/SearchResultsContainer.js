var React = require('react');
var PropTypes = React.PropTypes;
var SearchResults =require('../components/SearchResults');
var beerhelpers = require('../utils/beerdbhelper');

var SearchResultsContainer = React.createClass({

    getInitialState: function(){
         return (
           {
             beeritem: ''
           }
         )
    },
    componentDidMount: function(){
      // var query = this.props.location.state;
      //   //console.log(query.beeritem);
      //   this.setState({
      //     beeritem: query.beeritem
      //   })


        beerhelpers.search(this.props.location.state.beeritem)
                .then(function(beerInfo){
                    this.setState({
                      beeritem: beerInfo
                    })
                }.bind(this));


    },
    componentWillReceiveProps: function(nextProps){
      //look for props changes passed from searchbarcontainer if changed update search
            this.setState({
              beeritem:nextProps.location.state.beeritem
            });

    },
  render: function() {
    return (
      <SearchResults onUpdate={this.state.beeritem}/>
    )
  }

});

module.exports = SearchResultsContainer;
