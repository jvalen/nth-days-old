import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const About = function () {
  return (
    <div>
      <h1>About</h1>
      <Link className="btn" to="/">Home</Link>
    </div>
  );
};

function select(state) {
  return {
    data: state
  };
}

export default connect(select)(About);
