var React = require('react');
var Form = require('react-bootstrap').Form;
var Checkbox = require('react-bootstrap').Checkbox;
var Radio = require('react-bootstrap').Radio;
var Button = require('react-bootstrap').Button;
function FilterBox(props){
  return (
        <div>
            <Form>
              <Checkbox inline>
                 Name
              </Checkbox>
              <Checkbox inline>
                 ABV
              </Checkbox>
              <Radio inline name="order">
                Ascending
              </Radio>
              <Radio inline name="order">
                Descending
              </Radio>
              <Button>
                Filter
              </Button>
              </Form>
        </div>
  )
};

module.exports = FilterBox;
