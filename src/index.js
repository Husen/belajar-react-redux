import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';

// STORE
// ACTION
const increment = () => {
  return {
    type: "increment"
  }
}

const decrement = () => {
  return {
    type: "decrement"
  }
}
// REDUCER
const counter = (state = 0, action) => {
  switch(action.type) {
    case "increment": {
      return {...state, counter: state.counter + 1}
    }
    case "decrement": {
      return {...state, counter: state.counter - 1}
    }
    default: {
      return state
    }
  }
}

const store = createStore(counter)
store.subscribe(() => console.log(store.getState()))
// DISPATCH
store.dispatch(increment())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
