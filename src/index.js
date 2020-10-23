import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import App from "./components/App.js";
import reducer from "./reducers/index";

ReactDOM.render(
  <Provider
    store={createStore(
      reducer,
      composeWithDevTools(applyMiddleware(thunk))
    )}
  >
    <App />
  </Provider>,
  document.querySelector("#root")
);
