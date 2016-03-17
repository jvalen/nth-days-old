import React from 'react';
import Options from './Options';
import Matches from './Matches';
import Selection from './Selection';


const Results = function (props) {
  return (
    <div className="results">
      <Selection data={props.data}></Selection>
      <Options></Options>
      <Matches data={props.data}></Matches>
    </div>
  );
};

export default Results;
