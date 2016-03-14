import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import NthDaysOld from '../NthDaysOld';

const Home = React.createClass ({
  render: function() {
    return (
      <div>
        <h1>{ this.props.data.title }</h1>
        <NthDaysOld></NthDaysOld>
        <Link className="btn" to="/about">About</Link>
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
