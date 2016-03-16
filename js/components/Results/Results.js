import React from 'react';
import OptionsGrid from './OptionsGrid';
import Matches from './Matches';
import Selection from './Selection';


const Results = function (props) {
  return (
    <div>
      <OptionsGrid></OptionsGrid>
      <Selection data={props.data}></Selection>
      <Matches data={props.data}></Matches>
    </div>
  );
};

export default Results;
