import React from 'react';
import ReactDOM from 'react-dom';
import MovieContainer from './components/MovieContainer';

const App = () => (
  <div>
    <MovieContainer />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
