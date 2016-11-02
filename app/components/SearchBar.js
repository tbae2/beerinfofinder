var React = require('react');
var PropTypes = React.PropTypes;
var ReactBootstrap = require('react-bootstrap');
var Form = ReactBootstrap.Form;
var FormControl = ReactBootstrap.FormControl;
var FormGroup = ReactBootstrap.FormGroup;
var InputGroup = ReactBootstrap.InputGroup;
var Button = ReactBootstrap.Button;
function SearchBar(props){
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 text-center">
          <Form inline>
            <FormGroup>
              <InputGroup>
                <FormControl type="text" placeholder="testSearchBar.js"/>
                <InputGroup.Button>
                    <Button>Search</Button>
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
