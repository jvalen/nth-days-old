import React from 'react';
import { pastPresentFuture } from '../../utils/time';
import moment from 'moment';

const Matches = function (props) {
  const showNth = function(data) {
    const birthday = moment().year(data.year).month(data.month).date(data.day),
          offset = parseInt(data.range, 10);

    let result = [],
        date;

    if (offset) {
      // Fixed range of days: 10000, 5000, ...
      let daysAmount;
      for (let i = 1; i < 10; i++) {
        daysAmount = offset * i;
        date = birthday.clone().add(daysAmount, 'days');

        result.push(
          <div className={ "matches__result matches__result--" + pastPresentFuture(date)} key={i}>
            {daysAmount}:&nbsp;
            {date.format("dddd, MMMM Do YYYY")}
          </div>
        );
      }
    } else {
      // Repdigit range of days: 1111, 2222 ... 11111, 22222 ...
      let values = [1111, 11111],
          daysAmount,
          key = 1;

      for (let i = 0; i < values.length; i++) {
        daysAmount = values[i];
        while (daysAmount <= values[i] * 9) {
          date = birthday.clone().add(daysAmount, 'days');
          result.push(
            <div className={ "matches__result matches__result--" + pastPresentFuture(date)} key={key}>
              {daysAmount}
              :&nbsp;
              {date.format("dddd, MMMM Do YYYY")
              }
            </div>
          );
          daysAmount += values[i];
          key++;
        }
      }
    }

    return result;
  };

  const daysOnEarth = function(data) {
    const birthday = moment().year(data.year).month(data.month).date(data.day);
    return moment().diff(birthday, 'days');
  };
  return (
    <div className="matches">
      {props.data.range}
      <h2>
        Today is your
        <span className="matches__nthday">{ daysOnEarth(props.data) }th</span>
         on Earth
       </h2>
      <div>
        <span>{showNth(props.data)}</span>
      </div>
    </div>
  );
};

export default Matches;
