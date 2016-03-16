import React from 'react';
import { connect } from 'react-redux';
import { changeRange } from '../../actions/actionCreators';

const Options = function (props) {
  const generateOptions = function() {
    const fixedValues = [
      { label: 10000, value: 10000},
      { label: 5000, value: 5000},
      { label: 'Repdigit', value: 'repdigit'}
    ];
    let options = [];

    for (let i = 0; i < fixedValues.length; i++) {
      options.push(
        <div key={i}>
          <input
            id={ 'option-' + i }
            className="radio-options__input"
            type="radio"
            name="options-radio"
            value={fixedValues[i].value}
            onChange={() => props.dispatch(changeRange(fixedValues[i].value))}
          />
        <label className="radio-options__label" htmlFor={ 'option-' + i }>
            { fixedValues[i].label }
          </label>
        </div>
      );
    }

    return options;
  };
  return (
    <div>
      <fieldset>
        {generateOptions()}
      </fieldset>
    </div>
  );
};

function select(state) {
  return {
    data: state
  };
}

export default connect(select)(Options);
