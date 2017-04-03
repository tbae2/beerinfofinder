import React from 'react';
//var ReactBootstrap = require('react-bootstrap');
import { Navbar, Nav, NavItem } from 'react-bootstrap'

function TopNav(){

      return (
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#'>BeerFinder</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="https://github.com/tbae2/beerinfofinder">GitHub Link</NavItem>
          </Nav>
        </Navbar>
      )


};

export default TopNav;
