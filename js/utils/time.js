import moment from 'moment';

let getMomentFormat = function(type) {
  switch (type) {
    case 'matches':
      return 'll';
      break;
    case 'birthday':
      return 'LL'
      break;
    default:
      return '';
  }
}

export function pastPresentFuture(time) {
  if (moment().isAfter(time, 'day')) {
    return 'past';
  } else if (moment().isBefore(time, 'day')) {
    return 'future';
  } else {
    return 'present';
  }
}

export function buildDate(year, month, day, locale = 'en', format = '') {
  let date = moment().locale(locale).year(year).month(month).date(day);
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
  return moment.months(locale);
}

export function daysInMonth(year, month) {
  return moment().year(year).month(month).daysInMonth();
}
