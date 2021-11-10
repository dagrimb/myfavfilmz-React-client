import { createStore, compose, applyMiddleware } from "redux";
import ReduxPromise from 'redux-promise';
import moviesApp from '../reducers/reducers.js';
import { createBrowserHistory }from 'history';
import { routerMiddleware } from 'react-router-redux';

export const history = createBrowserHistory();

export function configureStore(initializeState) {
  const store = createStore(
    moviesApp,
    initializeState,
    compose (
      applyMiddleware(ReduxPromise, routerMiddleware(history)),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

      // there is more stuff here; only include it if necessary

    return store;

}


// see about brining everything from this file into index.jsx