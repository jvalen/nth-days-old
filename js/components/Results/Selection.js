import React from 'react';
import { buildDate } from '../../utils/time';

const Selection = (props) => {
  return (
    <div className="selection">
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
    </div>
  );
};

export default Selection;
