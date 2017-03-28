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
var ControlLabel = require('react-bootstrap').ControlLabel;


SearchBar.propTypes = {
  beeritem: PropTypes.string.isRequired
}

function SearchBar(props){
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 text-center">


          <Form inline onSubmit={props.onSubmitQuery}>
            <FormGroup>
              <ControlLabel>Search By:</ControlLabel>
              <FormControl componentClass="select" placeholder="Search Type" onChange={props.onSelectChange}>
                <option value="beername">Beer Name</option>
                <option value="breweryname">Brewery</option>
                <option value="beertype">Beer Type</option>
              </FormControl>
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
