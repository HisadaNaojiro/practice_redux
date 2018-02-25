import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,hashHistory} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer';
import {setState} from './action_creators';
import App from './components/App';

const store = createStore(reducer);

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
  store.dispatch(setState(state))
);

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
