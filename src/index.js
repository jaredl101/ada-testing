import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
//import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Axios Impot:
import Axios from 'axios';

const bodyweight = (state = [], action) => {
  switch (action.type) {
    case 'SET_BODYWEIGHT':
      return action.payload;
    default:
      return state;
  }
}

function* fetchBodyweight(action) {
  try {
    const response = yield Axios.get(`api/bodyweight`);
    yield put({type: 'SET_BODYWEIGHT', payload: response.data});
  } catch (error) {
    alert('Unable to fetch the bodyweights');
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_BODYWEIGHT', fetchBodyweight);
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
    bodyweight,
  }),
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
//registerServiceWorker();
