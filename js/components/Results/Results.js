import React from 'react';
import Options from './Options';
import Matches from './Matches';
import Selection from './Selection';


const Results = function (props) {
  return (
    <div className="results">
      <Selection
        messages={ props.messages}
        locale={ props.locale }
        data={props.data}>
      </Selection>
      <Options></Options>
      <Matches
        messages={ props.messages}
        locale={ props.locale }
        data={props.data}>
      </Matches>
    </div>
  );
};

export default Results;
