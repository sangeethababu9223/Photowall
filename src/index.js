import React from "react";
import ReactDOM from "react-dom/client";
import './styles/stylesheet.css';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./components/App";
// import { database } from "./database/config";

const store = createStore(
  rootReducer, 
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
  applyMiddleware(thunk)
  );
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode><Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider></React.StrictMode>
);
