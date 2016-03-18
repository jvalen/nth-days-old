import expect from 'expect';
import homeReducer from '../js/reducers/homeReducer';

// Reducer tests
describe('homeReducer', () => {
  // Initial state
  it('should return the initial state', () => {
    expect(homeReducer(undefined, {})).toEqual({
      range: 10000,
      year: 0,
      month: 0,
      day: 0
    });
  });
});
