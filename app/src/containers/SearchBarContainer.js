var React = require('react');
// var PropTypes = React.PropTypes;
import SearchBar from '../components/SearchBar'
import FilterBox from '../components/FilterBox'
// import beerhelper from '../utils/beerdbhelper'
// import SearchResult from '../components/SearchResults'
// import { withRouter } from 'react-router-dom'

var SearchBarContainer = React.createClass({
    // contextTypes: {
    //   router: React.PropTypes.object.isRequired
    // },
    getInitialState: function(){
      return {
        beeritem: '',
        searchType: 'beername',
        sortOrder: 'name',
        sortBy: 'ASC',
        searchInitiated: {display: 'none'}
      }
    },
      handleUpdateQuery: function(e){
      // console.log(e.target.value);
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
          // console.log(e.target.value);
          this.setState({
            sortBy: e.target.value
          });
      },
      updateSortOrder: function(e){
          // console.log(e.target.value);
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

      //change sthe history / route to update the url
      this.props.history.push({ pathname :'/results',
                                   query : { term : this.state.beeritem,
                                             type : this.state.searchType,
                                           sortBy : this.state.sortBy,
                                        sortOrder : this.state.sortOrder }
                              });
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

export default SearchBarContainer;
