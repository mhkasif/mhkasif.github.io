import React from "react";
import ReactDOM, { hydrate,render } from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from './serviceWorker';
import configStore from "./Redux/StoreConfig/StoreConfig";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from './history';


var store = configStore();
const IndexApp=()=><Provider store={store}>
<Router history={history}>
  <App />
</Router>
</Provider>

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<IndexApp />, rootElement);
} else {
  render(<IndexApp />, rootElement);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
