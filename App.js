import React from "react";
import MainApplication from "./MainApplication";
import {createStore , applyMiddleware, compose} from 'redux'; 
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import reducer from './src/user/reducer'; 
import { login } from "./src/user/userAction";

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))


export default function App() {
  return (
    <Provider store={store}>
      <MainApplication />
    </Provider>
  );
}
