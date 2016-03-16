import React from 'react';
import { connect } from 'react-redux';

const App = function (props) {
  return (
    <div className="main__wrapper">
      <header>
        <h1>nth days old</h1>
      </header>
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
