import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createBrowserHistory } from "history";
import reportWebVitals from "./reportWebVitals";

//States
const history = createBrowserHistory();
const container = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App history={history} />
    </Router>
  </React.StrictMode>,
  container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
