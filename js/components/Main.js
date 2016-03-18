import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const App = function (props) {
  return (
    <div className="main__wrapper">
      <header>
        <h1 className="header__h1">
          <span className="header__nth">nth</span>
          <span className="header__day"> day</span>
       </h1>
       <div className="header__social">
         <iframe
           src="https://ghbtns.com/github-btn.html?user=jvalen&repo=nth-days-old&type=star&count=true"
           frameborder="0"
           scrolling="0"
           width="75px"
           height="20px"
           style={{border: 'none'}}>
         </iframe>

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
