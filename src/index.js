import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

let AUTH_TOKEN = localStorage.getItem("token");

axios.defaults.baseURL = "http://localhost:5000/api/v1/";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
