import React from 'react';
import Options from './Options';
import Matches from './Matches';
import Selection from './Selection';


const Results = (props) => {
  return (
    <div className="results">
      <Selection
        messages={ props.messages}
        locale={ props.locale }
        data={props.data}
      />
      <Options />
      <Matches
        messages={ props.messages}
        locale={ props.locale }
        data={props.data}
      />
    </div>
  );
};

export default Results;
