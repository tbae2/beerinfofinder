var React = require('react');
// var PropTypes = React.PropTypes;
import SearchResults from '../components/SearchResults';
var beerhelpers = require('../utils/beerdbhelper');
var FilterBox = require('../components/FilterBox');
// import { withRouter } from 'react-router-dom'

var SearchResultsContainer = React.createClass({

    getInitialState: function(){
         return (
           {
             beeritems: []
           }
         )
    },
    searchBeer: function(beerquery){
      // console.log(beerquery);
        beerhelpers.search(beerquery)
                .then(function(beerInfo){
                  console.log(beerInfo);
                    this.setState({
                      beeritems: beerInfo
                    })

                }.bind(this));

      },
    resultFilter: function(){

        var original = this.state.beeritem;
        var sortOrder = this.state.sortOrder;
        var sortBy = this.state.sortBy;
        console.log(sortOrder);

          //
          // this.setState({
          //   beeritem: original
          // })

    },
    componentDidMount: function(){
      // var query = this.props.location.state;
      //   //console.log(query.beeritem);
      //   this.setState({
      //     beeritem: query.beeritem
      //   })
  //  console.log(this.props.location.query.type);

    this.searchBeer(this.props.location.query);

      // this.searchBeer([this.props.location.state.beeritem,
      //                  this.props.location.state.searchType,
      //                  this.props.location.state.sortOrder,
      //                  this.props.location.state.sortBy]);

    },
    componentWillReceiveProps: function(nextProps){
      //look for props changes passed from searchbarcontainer if changed update search
            // this.setState({
            //   beeritem:nextProps.location.state.beeritem
            // });
          //  console.log(nextProps);
        //  console.log(this.props.location.query);
          // this.searchBeer([this.props.location.state.beeritem,
          //                  this.props.location.state.searchType,
          //                  this.props.location.state.sortOrder,
          //                  this.props.location.state.sortBy]);

    },
  render: function() {

        return(
          <div>

                    {
                      this.state.beeritems.map(function(data){
                        console.log(data);
                        return <SearchResults key={data.id} onUpdate={data} />
                      })
                    }
        </div>
        )

  }

});

export default SearchResultsContainer;
