import moment from 'moment';

export function pastPresentFuture(time) {
  if (moment().isAfter(time, 'day')) {
    return 'past';
  } else if (moment().isBefore(time, 'day')) {
    return 'future';
  } else {
    return 'present';
  }
}

export function giveMeFormatedDate(year, month, day) {
  return moment().year(year).month(month).date(day).format("MMMM Do YYYY");
}
