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
    locale = messages[locale] ? locale : 'en';
  }

  let strings = messages[locale];
  strings = Object.assign(Object.create(messages.en), strings);

  const localeData = { locale, messages: strings };

  // Due that is a stateless component we cannot use mixins
  // Propagate intlData to children
  const childrenWithIntlData = React.Children.map(props.children, (child) => {
    return React.cloneElement(child, localeData);
  });

  return (
    <div className="main__wrapper">
      <header className="grid">
        <h1 className="header__h1 grid__col-1-2">
          <span className="header__nth">nth</span>
          <span className="header__day"> day</span>
       </h1>
       <div className="header__social grid__col-1-2">
         <iframe
           className="header__github-btn"
           src="https://ghbtns.com/github-btn.html?user=jvalen&repo=nth-days-old&type=star&count=true"
           frameBorder="0"
           scrolling="0"
           width="75px"
           height="20px"
           style={
             { border: 'none' }
           }
         >
         </iframe>
         <nav className="header__nav">
           <Link className="header__a--lang" to="/en">
             {localeData.messages.english}
           </Link>
           |
           <Link className="header__a--lang" to="/es">
             {localeData.messages.spanish}
           </Link>
         </nav>
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
