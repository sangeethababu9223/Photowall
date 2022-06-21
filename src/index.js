import React from "react";
import ReactDOM from "react-dom/client";
import MainComp from "./components/main";
import './styles/stylesheet.css';
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter><MainComp /></BrowserRouter>
);
