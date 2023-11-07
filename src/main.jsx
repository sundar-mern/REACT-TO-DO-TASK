import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import './app.css';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);
