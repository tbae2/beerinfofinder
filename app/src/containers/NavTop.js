import React from 'react';
//var ReactBootstrap = require('react-bootstrap');
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
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

module.exports = TopNav;
