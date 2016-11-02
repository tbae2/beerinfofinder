var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
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
