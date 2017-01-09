var React = require('react');
var PropTypes = React.PropTypes;
var SearchBar = require('../components/SearchBar');
var FilterBox = require('../components/FilterBox');

var SearchBarContainer = React.createClass({
    contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
      return {
        beeritem: '',
        searchType: 'beername',
        sortOrder: 'ASC',
        sortBy: 'name',
        searchInitiated: {display: 'none'}
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
      updateSortBy: function(e){
          console.log(e.target.value);
          this.setState({
            sortBy: e.target.value
          });
      },
      updateSortOrder: function(e){
          console.log(e.target.value);
        this.setState({
          sortOrder: e.target.value
        })
      }
      ,
    handleSubmitQuery: function(e){
      //prevent the default form action in html/bootstrap
      e.preventDefault();
      this.setState({
          searchInitiated: {display: 'inline'}
      })
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
    return (<div>
      <SearchBar onSubmitQuery={this.handleSubmitQuery}
        onQueryUpdate={this.handleUpdateQuery}
        onSelectChange={this.searchSelectChange}
      />
      <div>
      <FilterBox
          sortOrder={this.state.sortOrder}
          sortBy={this.state.sortBy}
          onSelect={this.updateSortBy}
          onOrder={this.updateSortOrder}
          submitFilter={this.resultFilter}
          searchStarted={this.state.searchInitiated}
      />
     </div>
    </div>
    );
  }

});

module.exports = SearchBarContainer;
