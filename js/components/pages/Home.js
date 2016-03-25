import React from 'react';
import { connect } from 'react-redux';
import NthDaysOld from '../NthDaysOld';
import { IntlMixin } from 'react-intl';

const Home = React.createClass ({
  mixins: [IntlMixin],
  render: function() {
    return (
      <div className="home">
        <NthDaysOld></NthDaysOld>
      </div>
    );
  }
});

function select(state) {
  return {
    data: state
  };
}

export default connect(select)(Home);
