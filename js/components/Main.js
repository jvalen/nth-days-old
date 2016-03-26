import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import messages from '../messages';

const App = function (props) {
  // Locale setup
  let locale;
  if (props.params.locale) {
    locale = props.params.locale; // Get locale from url
  } else {
    locale = (navigator.language || navigator.browserLanguage);
    locale = locale ? locale.split('-')[0] : 'en';
  }

  let strings = messages[locale] ? messages[locale] : messages['en'];
  strings = Object.assign(messages['en'], strings);

  let intlData = {
      locales: ['en', 'es'],
      messages: strings
  };

  // Due that is a stateless component we cannot use mixins
  // Propagate intlData to children
  let childrenWithIntlData = React.Children.map(props.children, (child) => {
      return React.cloneElement(child, {
        locales: intlData.locales,
        messages: intlData.messages
      });
  });

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
      { childrenWithIntlData }
    </div>
  );
};

function select(state) {
  return {
    data: state
  };
}

export default connect(select)(App);
