import React from 'react';
import { buildDate, daysDifferenceFrom } from '../../utils/time';
import { FacebookButton, TwitterButton } from 'react-social';


const Social = (props) => {
  const daysOnEarth = function (data) {
    const birthday = buildDate(
      data.year, data.month, data.day,
      props.locale, false
    );
    return daysDifferenceFrom(birthday);
  };
  const url = 'https://www.jvrpath.com/nth/';

  return (
    <div className="social">
      Share on:
      <FacebookButton
        message={ `${props.messages.today_is_my} ${daysOnEarth(props.data)} ${props.messages.day} ${props.messages.on_earth}`}
        url={url}
        appId="574905992666117"
        className="social__button-fb"
      >
        Facebook
      </FacebookButton>
      <TwitterButton
        message={ `${props.messages.today_is_my} ${daysOnEarth(props.data)} ${props.messages.day} ${props.messages.on_earth}`}
        url={url}
        className="social__button-tw"
      >
        Twitter
      </TwitterButton>
    </div>
  );
};

export default Social;
