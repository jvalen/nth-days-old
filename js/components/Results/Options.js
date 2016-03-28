import React from 'react';
import { connect } from 'react-redux';
import { changeRange } from '../../actions/actionCreators';

const Options = function (props) {
  const generateOptions = function () {
    const fixedValues = [
      { label: 10000, value: 10000 },
      { label: 5000, value: 5000 },
      { label: 1000, value: 1000 },
      { label: 'Repdigit', value: 'repdigit' }
    ];
    const options = [];

    for (let i = 0; i < fixedValues.length; i++) {
      options.push(
        <span className="options__item-wrapper" key={i}>
          <input
            id={ `option-${i}` }
            className="options__radio-input"
            type="radio"
            name="radio-options"
            value={fixedValues[i].value}
            onChange={
              () => { props.dispatch(changeRange(fixedValues[i].value));}
            }
            defaultChecked={ i === 0 }
          />
        <label className="options__radio-label" htmlFor={ `option-${i}` }>
            { fixedValues[i].label }
          </label>
        </span>
      );
    }

    return options;
  };
  return (
    <div className="options">
      <h3 className="options__title">{ props.messages.event_list }:</h3>
      <fieldset className="options__fieldset">
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
