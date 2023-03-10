import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./routes/index";
import * as serviceWorker from "./serviceWorker";
import "react-notifications/lib/notifications.css";
import "bootstrap/dist/css/bootstrap.min.css";

import dotenv from "dotenv";
dotenv.config();
ReactDOM.render(
  <Routes />,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
