import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Import the pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Main from './components/Main';

// Import the CSS imports file
import '../css/imports.css';

import reducer from './reducers/reducer';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

// hot reloadable reducers
if (module.hot) {
  module.hot.accept('./reducers/reducer', () => {
    const nextRootReducer = require('./reducers/reducer').default;
    store.replaceReducer(nextRootReducer);
  });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={Main}>
        <Route path="/" component={Home} />
        <Route path="/nth" component={Home} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
