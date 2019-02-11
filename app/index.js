import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import MovieContainer from './components/MovieContainer';

const App = () => (
  <div>
    <MovieContainer />
  </div>
);

ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>, 
document.getElementById('app'));
