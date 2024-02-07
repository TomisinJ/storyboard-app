import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = [
  {id: "scene-id", title: "scene 1", description: "this is scene 1"},
  {id: "scene-id", title: "scene 2", description: "this is scene 2"},
  {id: "scene-id", title: "scene 3", description: "this is scene 3"},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App scenes={DATA} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
