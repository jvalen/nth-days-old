import React from 'react';
import { connect } from 'react-redux';
import { changeRange } from '../actions/actionCreators';

const OptionsGrid = function (props) {
  const generateOptions = function() {
    const fixedValues = [10000, 5000];
    let options = [],
        key = 0;

    for (let i = 0; i < fixedValues.length; i++) {
      options.push(
        <button
          key={key}
          onClick={() => props.dispatch(changeRange(fixedValues[i]))}>
            {fixedValues[i]}
        </button>
      );
      key++;
    }

    options.push(
      <button
        key={key}
        onClick={() => props.dispatch(changeRange('repdigit'))}>
          Repdigit
      </button>
    );

    return options;
  };
  return (
    <div>
      {generateOptions()}
    </div>
  );
};

function select(state) {
  return {
    data: state
  };
}

export default connect(select)(OptionsGrid);
