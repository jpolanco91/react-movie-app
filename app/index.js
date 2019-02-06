var React = require('react');
var ReactDOM = require('react-dom');
var MovieContainer = require('./components/MovieContainer');

const App = () => (
  <div>
    <MovieContainer />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
