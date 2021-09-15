import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import './styles.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  rootElement
);


// let state = 'text';

// function setState(newState) {
//   state = newState;
//   renderTest();
// }
// let oldDiv = null;
// function renderTest() {
//   const div = document.createElement('div');
//   div.textContent = state;

//   if(oldDiv) {
//     rootElement.replaceChild(div, oldDiv);
//   } else {
//     rootElement.appendChild(div);
//   }
//   oldDiv = div;
// }

// renderTest();

// let i = 0;
// const words = ['a', 'b', 'c'];
// setInterval(() => {
//   setState(words[i]);
//   i++;
// }, 1500)