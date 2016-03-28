import React from 'react';
import { connect } from 'react-redux';
import { changeYear, changeMonth, changeDay } from '../actions/actionCreators';
import Modal from 'boron/DropModal';
import Results from './Results/Results';
import { giveMeMonths, daysInMonth } from '../utils/time';

class NthDaysOld extends React.Component {
  constructor() {
    // React ES6 classes do not autobind their methods :S
    // (the older React.createClass did it)
    // the following way is a tip from "eslint"
    super();
    this.nextStep = this.nextStep.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.generateMonths = this.generateMonths.bind(this);
    this.generateDays = this.generateDays.bind(this);
  }
  nextStep(ev) {
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
      default:
    }
  }

  clickHandler() {
    this.refs.yearmodal.show();
  }

  generateMonths() {
    const months = giveMeMonths(this.props.locale);

    return months.reduce((accu, elem, index) => {
      accu.push(
        <button
          className="nthdaysold__modal__button nthdaysold__modal__button--month"
          data-type="month"
          onClick={this.nextStep}
          key={index}
          value={index}
        >
          {elem}
        </button>
      );
      return accu;
    }, []);
  }

  generateDays() {
    const days = daysInMonth(this.props.data.year, this.props.data.month);
    const buttons = [];

    for (let i = 1; i <= days; i++) {
      buttons.push(
        <button
          data-type="day"
          className="nthdaysold__modal__button nthdaysold__modal__button--day"
          onClick={this.nextStep}
          key={i}
          value={i}
        >
          {i}
        </button>
      );
    }
    return buttons;
  }

  render() {
    const birthdaySet = this.props.data.day !== 0;
    const backdropStyle = {
      backgroundColor: '#462E4D',
      opacity: 0.8
    };
    const contentStyle = {
      backgroundColor: 'white',
      padding: '2em'
    };
    return (
      <div className="nthDaysOld">
        { birthdaySet ?
          null :
          <h2 className="nthdaysold__h2">
            { this.props.messages.days_on_earth }
          </h2>
        }
        { birthdaySet ?
          null :
          <button
            className="nthdaysold__button--start fade"
            onClick={this.clickHandler}
          >
            {this.props.messages.calculate}
          </button>
        }

        <Modal
          className="modal"
          ref="yearmodal"
          backdropStyle={backdropStyle}
          contentStyle={contentStyle}
        >
          <h2 className="nthdaysold__modal__h2">
            { this.props.messages.year_born }
          </h2>
          <div>
            <input
              ref="yearinput"
              className="nthdaysold__modal-input"
              type="tel"
              placeholder="2016"
              autoFocus
            />
            <button
              data-type="year"
              className="nthdaysold__modal__button nthdaysold__modal__button--year"
              onClick={this.nextStep}
            >
              { this.props.messages.next }
            </button>
          </div>
        </Modal>
        <Modal
          className="modal"
          ref="monthmodal"
          backdropStyle={backdropStyle}
          contentStyle={contentStyle}
        >
          <h2 className="nthdaysold__modal__h2">
            { this.props.messages.month_born }
          </h2>
          {this.generateMonths()}
        </Modal>
        <Modal
          className="modal"
          ref="daymodal"
          backdropStyle={backdropStyle}
          contentStyle={contentStyle}
        >
          <h2 className="nthdaysold__modal__h2">
            { this.props.messages.day_born }
          </h2>
          {this.generateDays()}
        </Modal>
        { birthdaySet ?
          <div>
            <Results
              messages={ this.props.messages}
              locale={ this.props.locale }
              data={this.props.data}
            />
            <button
              className="nthdaysold__button--start fade"
              onClick={this.clickHandler}
            >
              {this.props.messages.try_other}
            </button>
          </div> : null
        }
      </div>
    );
  }
}

function select(state) {
  return {
    data: state
  };
}

export default connect(select)(NthDaysOld);
