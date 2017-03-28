import React from 'react';
import { Panel } from 'react-bootstrap';


function SearchResults(props){
  //console.log(props.onUpdate);
  return(

  <div className="col-sm-6 col-md-3 resultsbox">
    <Panel header={props.onUpdate.name}>
    <div className="abv">{props.onUpdate.abv}</div>
    <div className="beerstyle">{props.onUpdate.style === undefined ? 'N/A' : props.onUpdate.style.name }</div>
    <div className="description">{props.onUpdate.description}</div>
    </Panel>
  </div>

  )
};


module.exports = SearchResults;
