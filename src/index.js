import React from 'react';
import ReactDOM from 'react-dom';
import "../src/main.scss";
import App from "./App";
import './index.css';


if(process.env.NODE_ENV !== "development") {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}else {
  ReactDOM.render(<App />, document.getElementById('root'));
}
