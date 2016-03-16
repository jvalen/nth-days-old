import React from 'react';
import Options from './Options';
import Matches from './Matches';
import Selection from './Selection';


const Results = function (props) {
  return (
    <div>
      <Options></Options>
      <Selection data={props.data}></Selection>
      <Matches data={props.data}></Matches>
    </div>
  );
};

export default Results;
