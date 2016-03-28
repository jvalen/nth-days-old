import React from 'react';
import {
  pastPresentFuture,
  buildDate,
  addDaysToDate,
  formatDate,
  timeDifferenceFormattedFrom } from '../../utils/time';

const Matches = (props) => {
  const showNth = function (data) {
    let date;

    const birthday = buildDate(
      data.year, data.month, data.day,
      props.locale, false
    );
    const offset = parseInt(data.range, 10);
    const result = [];
    const createMatchBlock = function (key, currentDate, daysAmount, locale, messages) {
      return (
        <div
          className={
            `grid matches__result matches__result--${pastPresentFuture(currentDate)}`
          } key={key}
        >
          <span className="matches__days-amount grid__col-1-3">
            {daysAmount} { messages.days_old }
          </span>
          <span className="matches__date grid__col-1-3">
            <time dateTime={formatDate(currentDate, '', locale)}>
              {formatDate(currentDate, 'matches', locale)}
            </time>
          </span>
          <span className="matches__date grid__col-1-3">
            {timeDifferenceFormattedFrom(currentDate)}
          </span>
        </div>
      );
    };

    if (offset) {
      // Fixed range of days: 10000, 5000, ...
      let daysAmount;

      for (let i = 1; i < 20; i++) {
        daysAmount = offset * i;
        date = addDaysToDate(daysAmount, birthday);

        result.push(
          createMatchBlock(
            i, date, daysAmount, props.locale,
            { days_old: props.messages.days_old }
          )
        );
      }
    } else {
      // Repdigit range of days: 1111, 2222 ... 11111, 22222 ...
      const values = [1111, 11111];
      let daysAmount;
      let key = 1;

      for (let i = 0; i < values.length; i++) {
        daysAmount = values[i];
        while (daysAmount <= values[i] * 9) {
          date = addDaysToDate(daysAmount, birthday);
          result.push(
            createMatchBlock(
              key, date, daysAmount, props.locale,
              { days_old: props.messages.days_old }
            )
          );
          daysAmount += values[i];
          key++;
        }
      }
    }

    return result;
  };

  return (
    <div className="matches">
      <div className="matches__list">
        <span>{showNth(props.data)}</span>
      </div>
    </div>
  );
};

export default Matches;
