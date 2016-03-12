import React from 'react';

const Selection = function (props) {
  return (
    <div>
      <div>Year: {props.data.year}</div>
      <div>Month: {props.data.month}</div>
      <div>Day: {props.data.day}</div>
      <div>Range: {props.data.range}</div>
    </div>
  );
};

export default Selection;
