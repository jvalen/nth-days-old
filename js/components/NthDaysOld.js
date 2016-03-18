import React from 'react';
import { connect } from 'react-redux';
import { changeYear, changeMonth, changeDay } from '../actions/actionCreators';
import Modal from 'boron/DropModal';
import Results from './Results/Results';
import moment from 'moment';

const NthDaysOld = React.createClass ({
  nextStep: function(ev) {
    const className = ev.target.getAttribute('data-type');

    switch (className) {
      case 'year':
        this.props.dispatch(changeYear(parseInt(this.refs.yearinput.value, 10)));
        this.refs.yearmodal.hide();
        this.refs.monthmodal.show();
        break;
      case 'month':
        this.props.dispatch(changeMonth(ev.target.getAttribute('value')));
        this.refs.monthmodal.hide();
        this.refs.daymodal.show();
        break;
      case 'day':
        this.props.dispatch(changeDay(parseInt(ev.target.getAttribute('value'), 10)));
        this.refs.daymodal.hide();
        break;
    }
  },
  clickHandler: function() {
    this.refs.yearmodal.show();
  },
  generateMonths: function() {
    const months = moment.months(),
          color = '000000';

    return months.reduce((accu, elem, index) => {
      accu.push(<button
        className="nthdaysold__modal__button nthdaysold__modal__button--month"
        data-type="month"
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
    const buttons = [],
          color = '000000';
    for (var i = 1; i <= days; i++) {
      buttons.push(<button
        data-type="day"
        className="nthdaysold__modal__button nthdaysold__modal__button--day"
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
    let birthdaySet = this.props.data.day !== 0,
        backdropStyle = {
          backgroundColor: '#462E4D',
          opacity: 0.8
        },
        contentStyle = {
          backgroundColor: 'white',
          padding: '2em'
        };
    return (
      <div className="nthDaysOld">
        { birthdaySet ?
          null : <h2 className="nthdaysold__h2">How many days have you been on Earth?</h2>
        }
        <button
          className="nthdaysold__button--start fade"
          onClick={this.clickHandler}>
            { birthdaySet ? 'Try other date' : 'Calculate' }
        </button>
        <Modal
          className="modal"
          ref="yearmodal"
          backdropStyle={backdropStyle}
          contentStyle={contentStyle}>
          <h2 className="nthdaysold__modal__h2">What YEAR were you born in?</h2>
          <div>
            <input
              ref="yearinput"
              className="nthdaysold__modal-input"
              type="text"
              placeholder="2016"
              autoFocus
            />
            <button
              data-type="year"
              className="nthdaysold__modal__button nthdaysold__modal__button--year"
              onClick={this.nextStep}>
              NEXT
            </button>
          </div>
        </Modal>
        <Modal
          className="modal"
          ref="monthmodal"
          backdropStyle={backdropStyle}
          contentStyle={contentStyle}>
          <h2 className="nthdaysold__modal__h2">What about the MONTH?</h2>
          {this.generateMonths()}
        </Modal>
        <Modal
          className="modal"
          ref="daymodal"
          backdropStyle={backdropStyle}
          contentStyle={contentStyle}>
          <h2 className="nthdaysold__modal__h2">DAY?</h2>
          {this.generateDays()}
        </Modal>
        { birthdaySet ? <Results data={this.props.data}></Results> : null }
      </div>
    );
  }
});

function select(state) {
  return {
    data: state
  };
}

export default connect(select)(NthDaysOld);
