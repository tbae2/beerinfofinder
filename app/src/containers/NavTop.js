import React from 'react';
//var ReactBootstrap = require('react-bootstrap');
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Route,NavLink,Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'


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
