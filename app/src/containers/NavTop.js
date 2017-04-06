import React from 'react';
//var ReactBootstrap = require('react-bootstrap');
import { Navbar, Nav} from 'react-bootstrap'
import { Route,Link } from 'react-router-dom'

const ListItemLink = ({to, children}) => (
  <Route path={to} children={({match}) => (
    <li role="presentation" className={match ? 'active' : ''}>
      <Link to={to}>{children}</Link>
    </li>
  )} />
)


function TopNav(){

      return (
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='/'>BeerFinder</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <ListItemLink to="/about">About</ListItemLink>
          </Nav>
        </Navbar>
      )


};

export default TopNav;
