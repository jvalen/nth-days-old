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
        { props.messages.today_is }
        <span className="current-day__nthday">{ daysOnEarth(props.data) }</span>
         { `${props.messages.day} ${props.messages.on_earth}` }
      </h2>
    </div>
  );
};

export default CurrentDay;
