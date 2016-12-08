var React = require('react');
var PropTypes = React.PropTypes;
var SearchResults =require('../components/SearchResults');
var beerhelpers = require('../utils/beerdbhelper');
var FilterBox = require('../components/FilterBox');

var SearchResultsContainer = React.createClass({

    getInitialState: function(){
         return (
           {
             beeritem: [],
             sortOrder: 'ASC',
             sortBy: 'name'
           }
         )
    },
    updateSortBy: function(e){
        console.log(e.target.value);
        this.setState({
          sortBy: e.target.value
        });
    },
    updateSortOrder: function(e){
      this.setState({
        sortOrder: e.target.value
      })
    }
    ,
    searchBeer: function(beerquery){
        beerhelpers.search(beerquery)
                .then(function(beerInfo){
                  //console.log(beerInfo);
                    this.setState({
                      beeritem: beerInfo
                    })

                }.bind(this));

      },
    resultFilter: function(){

        var original = this.state.beeritem;
        var sortOrder = this.state.sortOrder;
        var sortBy = this.state.sortBy;



        // if(sortOrder === "ascending" && sortBy === "abv"){
        //   original.sort(function(a,b){
        //           return a.abv - b.abv;
        //     })
        // } else if (sortOrder === "descending" && sortBy === "abv"){
        //   original.sort(function(a,b){
        //           return b.abv - a.abv;
        //     })
        // } else if(sortOrder === "ascending" && sortBy === "name"){
        //     original.sort(function(a,b){
        //         return a.name > b.name;
        //     })
        // } else if (sortOrder === "descending" && sortBy === "name"){
        //     original.sort(function(a,b){
        //       return a.name < b.name;
        //     })
        // }

          this.setState({
            beeritem: original
          })

    },
    componentDidMount: function(){
      // var query = this.props.location.state;
      //   //console.log(query.beeritem);
      //   this.setState({
      //     beeritem: query.beeritem
      //   })
      this.searchBeer([this.props.location.state.beeritem,this.props.location.state.searchType,this.state.sortOrder,this.state.sortBy]);

    },
    componentWillReceiveProps: function(nextProps){
      //look for props changes passed from searchbarcontainer if changed update search
            // this.setState({
            //   beeritem:nextProps.location.state.beeritem
            // });
          //  console.log(nextProps);
          this.searchBeer([this.props.location.state.beeritem,this.props.location.state.searchType,this.state.sortOrder,this.state.sortBy]);

    },
  render: function() {

        return(
          <div>
            <FilterBox
                sortOrder={this.state.sortOrder}
                sortBy={this.state.sortBy}
                onSelect={this.updateSortBy}
                onOrder={this.updateSortOrder}
                submitFilter={this.resultFilter}
            />
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
