var React = require('react');
var PropTypes = React.PropTypes;
//var ReactBootstrap = require('react-bootstrap');
var Form = require('react-bootstrap').Form;
var FormControl = require('react-bootstrap').FormControl;
var FormGroup = require('react-bootstrap').FormGroup;
var InputGroup = require('react-bootstrap').InputGroup;
var Button = require('react-bootstrap').Button;
var Dropdown = require('react-bootstrap').Dropdown;
var MenuItem = require('react-bootstrap').MenuItem;


function SearchBar(props){
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 text-center">


          <Form inline onSubmit={props.onSubmitQuery}>
            <FormGroup>
              <Dropdown id="dropdown-test">
                <Dropdown.Toggle>
                  Filter:
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <MenuItem eventKey="1">Beer Name</MenuItem>
                  <MenuItem eventKey="2">Brewery</MenuItem>
                  <MenuItem eventKey="3">Type</MenuItem>
                </Dropdown.Menu>
              </Dropdown>
              <InputGroup>
                <FormControl type="text" placeholder="testSearchBar.js" onChange={props.onQueryUpdate}/>
                <InputGroup.Button>
                    <Button type="submit">Search</Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>

    );
};


module.exports = SearchBar;
