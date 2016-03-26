import React from 'react';
import { connect } from 'react-redux';
import NthDaysOld from '../NthDaysOld';

const Home = (props) => {
  return (
    <div className="home">
      <NthDaysOld
        messages={ props.messages}
        locale={ props.locale }
      />
    </div>
  );
};

function select(state) {
  return {
    data: state
  };
}

export default connect(select)(Home);
