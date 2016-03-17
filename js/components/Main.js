import React from 'react';
import { connect } from 'react-redux';

const App = function (props) {
  return (
    <div className="main__wrapper">
      <header>
        <h1 className="header__h1">
          <span className="header__nth">nth</span>
          <span className="header__day"> day</span>
       </h1>
       <div className="header__social">
         github facebook twitter
       </div>
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
