import React from 'react';
import { giveMeFormatedDate } from '../../utils/time';

const Selection = function (props) {
  return (
    <div className="selection">
      You were born on&nbsp;
      <span className="selection__birthday">
      { giveMeFormatedDate(props.data.year, props.data.month, props.data.day) }
      </span>
    </div>
  );
};

export default Selection;
