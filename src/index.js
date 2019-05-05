import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

//////////////
// import contestantReducer from './Redux/contestantReducer';
// import allyReducer from './Redux/allyReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  currentUser: userReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk)) // this says if a dispatch is called with a function, it will be called with dispatch

//----- This is a combination of the various reducers. The keys will define the top level keys on the state.
// const rootReducer = combineReducers({
//   allyInfo: allyReducer,
//   contestantInfo: contestantReducer
// })


// const store = createStore(reducer)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
