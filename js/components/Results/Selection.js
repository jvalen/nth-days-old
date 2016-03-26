import React from 'react';
import { buildDate } from '../../utils/time';

const Selection = React.createClass({
  render: function() {
    return (
      <div className="selection">
        { this.props.messages['you_were_born'] }&nbsp;
        <span className="selection__birthday">
        { buildDate(
            this.props.data.year,
            this.props.data.month,
            this.props.data.day,
            this.props.locale,
            'birthday')
          }
        </span>
      </div>
    );
  }
});

export default Selection;
