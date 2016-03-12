export function changeTitle(title) {
  return { type: 'CHANGE_TITLE', title };
}

export function asyncChangeTitle(title) {
  return (dispatch) => {
    dispatch(changeTitle(title));
  };
}

export function changeYear(year) {
  return { type: 'CHANGE_YEAR', year };
}
export function changeMonth(month) {
  return { type: 'CHANGE_MONTH', month };
}
export function changeDay(day) {
  return { type: 'CHANGE_DAY', day };
}
export function changeRange(range) {
  return { type: 'CHANGE_RANGE', range };
}
