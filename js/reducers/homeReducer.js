import assignToEmpty from '../utils/assign';

const initialState = {
  range: 10000,
  year: 0,
  month: 0,
  day: 0
};

function homeReducer(state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case 'CHANGE_TITLE':
      return assignToEmpty(state, {
        title: action.title
      });
    case 'CHANGE_YEAR':
      return assignToEmpty(state, {
        year: action.year
      });
    case 'CHANGE_MONTH':
      return assignToEmpty(state, {
        month: action.month
      });
    case 'CHANGE_DAY':
      return assignToEmpty(state, {
        day: action.day
      });
    case 'CHANGE_RANGE':
      return assignToEmpty(state, {
        range: action.range
      });
    default:
      return state;
  }
}

export default homeReducer;
