import React from 'react';
import { buildDate, daysDifferenceFrom } from '../../utils/time';

const CurrentDay = (props) => {
  const daysOnEarth = function (data) {
    const birthday = buildDate(
      data.year, data.month, data.day,
      props.locale, false
    );
    return daysDifferenceFrom(birthday);
  };

  return (
    <div className="current-day">
      <h2 className="current-day__h2">
        <span className="current-day__mobile-block">{ props.messages.today_is }</span>
        <span className="current-day__mobile-block">
          <span className="current-day__nthday">{ daysOnEarth(props.data) }</span>
        </span>
        <span className="current-day__mobile-block">
         { `${props.messages.day} ${props.messages.on_earth}` }
       </span>
      </h2>
    </div>
  );
};

export default CurrentDay;
