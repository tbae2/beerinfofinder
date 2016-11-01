var React = require('react');
var PropTypes = React.PropTypes;
var ReactBootstrap = require('react-bootstrap');
var Form = ReactBootstrap.Form;
var FormControl = ReactBootstrap.FormControl;
var PageHeader = ReactBootstrap.PageHeader;
var SearchBar = require('./SearchBar');

var main = React.createClass({

  render: function() {
    return (
      <div className="main-container">
        <PageHeader>Hello PageHeader</PageHeader>
        <Form><FormControl type='text' placeholder='lolwut'/></Form>
        <SearchBar />
      </div>
    );
  }

});

module.exports = main;
