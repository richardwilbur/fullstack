import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// 2: We can create an initial store with a dummy reducer, and no state or middleware
// const store = createStore(() => [], {}, applyMiddleware());

// 4: Import reducers and pass to create store
// const store = createStore(reducers, {}, applyMiddleware());

// 5: Add redux-thunk as middleware
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// 1: We initially had the App at the top
// ReactDOM.render(<App />, document.querySelector('#root'));

// 3: Add the Provider above the App component
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
