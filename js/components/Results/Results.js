import React from 'react';
import Options from './Options';
import Matches from './Matches';
import Selection from './Selection';
import CurrentDay from './CurrentDay';
import Social from './Social';


const Results = (props) => {
  return (
    <div className="results">
      <CurrentDay
        messages={ props.messages }
        locale={ props.locale }
        data={ props.data }
      />
      <Selection
        messages={ props.messages }
        locale={ props.locale }
        data={ props.data }
      />
      <Social
        messages={ props.messages }
        locale={ props.locale }
        data={ props.data }
      />
      <Options
        messages={ props.messages }
        locale={ props.locale }
      />
      <Matches
        messages={ props.messages }
        locale={ props.locale }
        data={ props.data }
      />
    </div>
  );
};

export default Results;
