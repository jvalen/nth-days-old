import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { changeYear, changeMonth, changeDay } from '../../actions/actionCreators';
import OptionsGrid from '../OptionsGrid';
import Modal from 'boron/DropModal';
import moment from 'moment';
import Results from '../Results';
import Selection from '../Selection';

const Home = React.createClass ({
  nextStep: function(ev) {
    const className = ev.target.getAttribute('class');

    switch (className) {
      case 'year-button':
        this.props.dispatch(changeYear(parseInt(this.refs.yearinput.value, 10)));
        this.refs.yearmodal.hide();
        this.refs.monthmodal.show();
        break;
      case 'month-button':
        this.props.dispatch(changeMonth(ev.target.getAttribute('value')));
        this.refs.monthmodal.hide();
        this.refs.daymodal.show();
        break;
      case 'day-button':
        this.props.dispatch(changeDay(parseInt(ev.target.getAttribute('value'), 10)));
        this.refs.daymodal.hide();
        break;
    }
  },
  clickHandler: function() {
    if (this.props.data.year === 0) {
      this.refs.yearmodal.show();
    }
  },
  generateMonths: function() {
    const months = moment.months();
    return months.reduce((accu, elem, index) => {
      accu.push(<button
        className="month-button"
        onClick={this.nextStep}
        key={index}
        value={elem}>
          {elem}
        </button>
      );
      return accu;
    }, []);
  },
  generateDays: function() {
    const days = moment().year(this.props.data.year).month(this.props.data.month).daysInMonth();
    const buttons = [];
    for (var i = 1; i <= days; i++) {
      buttons.push(<button
        className="day-button"
        onClick={this.nextStep}
        key={i}
        value={i}>
          {i}
        </button>
      );
    }
    return buttons;
  },
  render: function() {
    return (
      <div>
        <h1>{ this.props.data.title }</h1>
        <button onClick={this.clickHandler}>Start</button>
        <OptionsGrid></OptionsGrid>
        <Modal ref="yearmodal">
          <h2>What YEAR were you born in?</h2>
          <input
            ref="yearinput"
            className="home__input"
            type="text"
            placeholder="2016"
          />
          <button className="year-button" onClick={this.nextStep}>Next</button>
        </Modal>
        <Modal ref="monthmodal">
          <h2>What about the MONTH?</h2>
          {this.generateMonths()}
        </Modal>
        <Modal ref="daymodal">
          <h2>DAY?</h2>
          {this.generateDays()}
        </Modal>
        <Selection data={this.props.data}></Selection>
        <Results data={this.props.data}></Results>
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
