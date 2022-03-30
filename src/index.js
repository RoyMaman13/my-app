import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    {/* CSS Bootstrap file */}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

