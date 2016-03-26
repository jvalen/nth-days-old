import React from 'react';
import {
  pastPresentFuture,
  buildDate,
  addDaysToDate,
  formatDate,
  timeDifferenceFormattedFrom,
  daysDifferenceFrom } from '../../utils/time';

const Matches = React.createClass ({
  showNth: function(data) {
    const birthday = buildDate(
            data.year, data.month, data.day,
            this.props.locale, false
          ),
          offset = parseInt(data.range, 10);

    let result = [],
        date,
        createMatchBlock = function (key, date, daysAmount, locale, messages) {
          return (
            <div
              className={
                "grid matches__result matches__result--" +
                pastPresentFuture(date)
              } key={key}>
              <span className="matches__days-amount grid__col-1-3">
                {daysAmount} { messages['days_old'] }
              </span>
              <span className="matches__date grid__col-1-3">
                <time dateTime={formatDate(date, '', locale)}>
                  {formatDate(date, 'matches', locale)}
                </time>
              </span>
              <span className="matches__date grid__col-1-3">
                {timeDifferenceFormattedFrom(date)}
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
            i, date, daysAmount, this.props.locale,
            { 'days_old': this.props.messages['days_old']}
          )
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
          date = addDaysToDate(daysAmount, birthday);
          result.push(
            createMatchBlock(
              key, date, daysAmount, this.props.locale,
              { 'days_old': this.props.messages['days_old']}
            )
          );
          daysAmount += values[i];
          key++;
        }
      }
    }

    return result;
  },
  daysOnEarth: function(data) {
    const birthday = buildDate(
      data.year, data.month, data.day,
      this.props.locale, false
    );
    return daysDifferenceFrom(birthday);
  },
  render: function(){
    return (
      <div className="matches">
        <h2 className="matches__h2">
          { this.props.messages['today_is'] }
          <span className="matches__nthday">{ this.daysOnEarth(this.props.data) }</span>
           { this.props.messages['day'] + ' ' +  this.props.messages['on_earth']}
         </h2>
        <div className="matches__list">
          <span>{this.showNth(this.props.data)}</span>
        </div>
      </div>
    );
  }
});

export default Matches;
