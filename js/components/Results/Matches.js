import React from 'react';
import { pastPresentFuture } from '../../utils/time';
import moment from 'moment';
import { IntlMixin } from 'react-intl';

const Matches = React.createClass ({
  mixins: [IntlMixin],
  showNth: function(data) {
    const birthday = moment().year(data.year).month(data.month).date(data.day),
          offset = parseInt(data.range, 10);

    let result = [],
        date;

    if (offset) {
      // Fixed range of days: 10000, 5000, ...
      let daysAmount;
      for (let i = 1; i < 20; i++) {
        daysAmount = offset * i;
        date = birthday.clone().add(daysAmount, 'days');

        result.push(
          <div
            className={
              "grid matches__result matches__result--" +
              pastPresentFuture(date)
            } key={i}>
            <span className="matches__days-amount grid__col-1-3">
              {daysAmount} { this.getIntlMessage('days_old') }
            </span>
            <span className="matches__date grid__col-1-3">
              <time dateTime={date.format()}>
                {date.format("MMM Do YYYY")}
              </time>
            </span>
            <span className="matches__date grid__col-1-3">
              {date.from(moment())}
            </span>
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
            <div
              className={
                "grid matches__result matches__result--" +
                pastPresentFuture(date)
              } key={key}>
              <span className="matches__days-amount grid__col-1-3">
                {daysAmount} { this.getIntlMessage('days_old') }
              </span>
              <span className="matches__date grid__col-1-3">
                <time dateTime={date.format()}>
                  {date.format("MMM Do YYYY")}
                </time>
              </span>
              <span className="matches__date grid__col-1-3">
                {date.from(moment())}
              </span>
            </div>
          );
          daysAmount += values[i];
          key++;
        }
      }
    }

    return result;
  },
  daysOnEarth: function(data) {
    const birthday = moment().year(data.year).month(data.month).date(data.day);
    return moment().diff(birthday, 'days');
  },
  render: function(){
    return (
      <div className="matches">
        <h2 className="matches__h2">
          { this.getIntlMessage('today_is') }
          <span className="matches__nthday">{ this.daysOnEarth(this.props.data) }</span>
           { this.getIntlMessage('day') + ' ' +  this.getIntlMessage('on_earth')}
         </h2>
        <div className="matches__list">
          <span>{this.showNth(this.props.data)}</span>
        </div>
      </div>
    );
  }
});

export default Matches;
