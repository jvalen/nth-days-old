import React from 'react';
import { buildDate } from '../../utils/time';

const Selection = (props) => {
  return (
    <div className="selection">
      &#40;
      { props.messages.you_were_born }&nbsp;
      <span className="selection__birthday">
      { buildDate(
          props.data.year,
          props.data.month,
          props.data.day,
          props.locale,
          'birthday')
        }
      </span>
      &#41;
    </div>
  );
};

export default Selection;
