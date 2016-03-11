import expect from 'expect';
import homeReducer from '../js/reducers/homeReducer';

// Reducer tests
describe('homeReducer', () => {
  // Initial state
  it('should return the initial state', () => {
    expect(homeReducer(undefined, {})).toEqual({
      title: '- React Pleasing start - ',
    });
  });

  // Test that it handles changing the owner correctly
  it('should handle the CHANGE_TITLE action', () => {
    const title = 'How are you';

    expect(
      homeReducer({}, {
        type: 'CHANGE_TITLE',
        title
      })
    ).toEqual({
      title: title
    });
  });
});
