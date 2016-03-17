import React from 'react';
import { connect } from 'react-redux';
import NthDaysOld from '../NthDaysOld';

const Home = React.createClass ({
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
