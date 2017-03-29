import React from 'react';
var Form = require('react-bootstrap').Form;
var Checkbox = require('react-bootstrap').Checkbox;
var Radio = require('react-bootstrap').Radio;
var Button = require('react-bootstrap').Button;
var FormGroup = require('react-bootstrap').FormGroup;

function FilterBox(props){
  return (
        <div>
            <Form inline onSubmit={props.submitFilter} style={props.searchStarted}>
              <FormGroup>
              <Checkbox inline value='name' checked={props.sortBy === 'name'} onChange={props.onSelect}>
                 Name
              </Checkbox>
              <Checkbox inline value='abv' checked={props.sortBy === 'abv'} onChange={props.onSelect}>
                 ABV
              </Checkbox>
              </FormGroup>
              <FormGroup>
              <Radio inline name="order" checked={props.sortOrder === 'ASC'} value='ASC' onChange={props.onOrder}>
                Ascending
              </Radio>
              <Radio inline name="order" checked={props.sortOrder === 'DESC'} value='DESC' onChange={props.onOrder}>
                Descending
              </Radio>
              </FormGroup>
              <Button type="submit">
                Filter
              </Button>
              </Form>
        </div>
  )
};

export default FilterBox;
