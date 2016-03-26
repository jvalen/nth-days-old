import moment from 'moment';

const getMomentFormat = function (type) {
  switch (type) {
    case 'matches':
      return 'll';
    case 'birthday':
      return 'LL';
    default:
      return '';
  }
};

export function pastPresentFuture(time) {
  let result;
  if (moment().isAfter(time, 'day')) {
    result = 'past';
  } else if (moment().isBefore(time, 'day')) {
    result = 'future';
  } else {
    result = 'present';
  }
  return result;
}

export function buildDate(year, month, day, locale = 'en', format = '') {
  const date = moment().locale(locale).year(year).month(month).date(day);
  return date.format(getMomentFormat(format));
}

export function formatDate(date, format = '', locale = 'en') {
  return date.locale(locale).format(getMomentFormat(format));
}

export function addDaysToDate(daysAmount, date) {
  return moment(date).clone().add(daysAmount, 'days');
}

export function timeDifferenceFormattedFrom(date) {
  return date.from(moment());
}

export function daysDifferenceFrom(date) {
  return moment().diff(date, 'days');
}

export function giveMeMonths(locale = 'en') {
  moment.locale(locale);
  return moment.months();
}

export function daysInMonth(year, month) {
  return moment().year(year).month(month).daysInMonth();
}
