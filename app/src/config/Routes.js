import React from 'react';
import { BrowserRouter,Route} from 'react-router-dom';
import Main from '../components/Main'
import SearchResultsContainer from '../containers/SearchResultsContainer'
import Home from '../components/Home'
import SearchBarContainer from '../containers/SearchBarContainer'

var routes = (
  <BrowserRouter>
    <div>
      <Route path='/' component={Main} />
      <Route path='/' component={SearchBarContainer} />
      <Route path='/' component={Home} />

        <Route path='results' component={SearchResultsContainer}></Route>
      </div>

  </BrowserRouter>
);

export default routes;
