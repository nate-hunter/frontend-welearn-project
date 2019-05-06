import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import bookingReducer from './reducers/bookingReducer'


import userReducer from './reducers/userReducer';


const rootReducer = combineReducers({
  currentUser: userReducer,
  bookingInfo: bookingReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))) // this says if a dispatch is called with a function, it will be called with dispatch

// ------------------------------

// import contestantReducer from './Redux/contestantReducer';
// import allyReducer from './Redux/allyReducer';

//>> This is a combination of the various reducers. The keys will define the top level keys on the state.
// const rootReducer = combineReducers({
//   allyInfo: allyReducer,
//   contestantInfo: contestantReducer
// })



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));
