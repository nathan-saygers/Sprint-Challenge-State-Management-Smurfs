import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
// REDUX
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducers/smurfReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, 
  composeEnhancers(applyMiddleware(thunk, logger))
)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById("root"));
