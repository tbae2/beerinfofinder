import React from 'react';
import { BrowserRouter,Route, IndexRoute,Link,Switch } from 'react-router-dom';
import Main from '../components/Main'
import SearchResultsContainer from '../containers/SearchResultsContainer'
import Home from '../components/Home'


var routes = (
  <BrowserRouter>
    <div>
      <Route path='/' component={Main} />
      <Route path='/' component={Home} />
        {/* <Route path='results' component={SearchResultsContainer}></Route> */}
      </div>

  </BrowserRouter>
);

export default routes;
