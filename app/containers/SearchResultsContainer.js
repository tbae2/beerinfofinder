var React = require('react');
var PropTypes = React.PropTypes;
var SearchResults =require('../components/SearchResults');
var beerhelpers = require('../utils/beerdbhelper');
var FilterBox = require('../components/FilterBox');

var SearchResultsContainer = React.createClass({

    getInitialState: function(){
         return (
           {
             beeritem: []
           }
         )
    },
    searchBeer: function(beerquery){
        beerhelpers.search(beerquery)
                .then(function(beerInfo){
                  //console.log(beerInfo);
                    this.setState({
                      beeritem: beerInfo
                    })

                }.bind(this));

      },
    componentDidMount: function(){
      // var query = this.props.location.state;
      //   //console.log(query.beeritem);
      //   this.setState({
      //     beeritem: query.beeritem
      //   })
      this.searchBeer([this.props.location.state.beeritem,this.props.location.state.searchType]);

    },
    componentWillReceiveProps: function(nextProps){
      //look for props changes passed from searchbarcontainer if changed update search
            // this.setState({
            //   beeritem:nextProps.location.state.beeritem
            // });
            console.log(nextProps);
            this.searchBeer([nextProps.location.state.beeritem,nextProps.location.state.searchType]);

    },
  render: function() {

        return(
          <div>
            <FilterBox />
            <div>
                {this.state.beeritem.map(function(data){
                    return <SearchResults key={data.id} onUpdate={data} />
                  })}
        </div>
        </div>
        )

  }

});

module.exports = SearchResultsContainer;
