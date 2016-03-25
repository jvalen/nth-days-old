import React from 'react';
import { giveMeFormatedDate } from '../../utils/time';
import { IntlMixin } from 'react-intl';

const Selection = React.createClass({
  mixins: [IntlMixin],
  render: function() {
    return (
      <div className="selection">
        { this.getIntlMessage('you_were_born') }&nbsp;
        <span className="selection__birthday">
        { giveMeFormatedDate(this.props.data.year, this.props.data.month, this.props.data.day) }
        </span>
      </div>
    );
  }
});

export default Selection;
