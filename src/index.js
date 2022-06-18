import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/main";
import './styles/stylesheet.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
