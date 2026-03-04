import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import configStore from "./Redux/StoreConfig/StoreConfig";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const store = configStore();

const IndexApp = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<IndexApp />);
