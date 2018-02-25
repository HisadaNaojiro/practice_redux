import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,hashHistory} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './components/App';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: {Sunshine: 2}
    }
  }
});
ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter history={hashHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app')
);
