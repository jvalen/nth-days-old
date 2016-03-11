import React from 'react';
import { connect } from 'react-redux';

const App = function (props) {
  return (
    <div className="wrapper">
      { props.children }
    </div>
  );
};

function select(state) {
  return {
    data: state
  };
}

export default connect(select)(App);
