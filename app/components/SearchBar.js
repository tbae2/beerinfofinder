var React = require('react');
var PropTypes = React.PropTypes;
var ReactBootstrap = require('react-bootstrap');
var Form = ReactBootstrap.Form;
var FormControl = ReactBootstrap.FormControl;
var FormGroup = ReactBootstrap.FormGroup;

function SearchBar(props){
    return (
        <div>
          <Form inline>
            <FormGroup>
                <FormControl type=''
                <FormControl type="text" placeholder="testSearchBar.js"/>

            </FormGroup>
          </Form>
        </div>
    );
};


module.exports = SearchBar;
