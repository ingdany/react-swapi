import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import getCategoryDetails from "./reducers/index";

/* [1] Use Provider store and call createStore(reducers)*/
/* [8] Add thunk and ApplyMiddleware */
/* [9] add const store */

const store = createStore(combineReducers({getCategoryDetails}),applyMiddleware(thunk)) ;

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById("root")
);
