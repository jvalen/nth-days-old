import React from 'react';
import { buildDate } from '../../utils/time';
import { IntlMixin } from 'react-intl';

const Selection = React.createClass({
  mixins: [IntlMixin],
  render: function() {
    console.log(this);
    return (
      <div className="selection">
        { this.getIntlMessage('you_were_born') }&nbsp;
        <span className="selection__birthday">
        { buildDate(
            this.props.data.year,
            this.props.data.month,
            this.props.data.day,
            this.context.messages.locale,
            'birthday')
          }
        </span>
      </div>
    );
  }
});

export default Selection;
