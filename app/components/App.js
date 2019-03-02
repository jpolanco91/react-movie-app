import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import PropTypes from 'react-proptypes';
import MovieContainer from './MovieContainer';
import MovieTrailerPlayer from './MovieTrailerPlayer';

class App extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { config } = this.props;
    Axios.get(config.API_URL).then(({ data = [] }) => {
      this.setState({ movies: data });
    });
  }

  render() {
    const { movies } = this.state;
    const { config } = this.props;

    return (
      <React.Fragment>
        <Route exact path="/" render={() => <MovieContainer movies={movies} />} />
        <Route
          path="/movie_trailer/:movieId"
          render={props => <MovieTrailerPlayer {...props} apiUrl={config.API_URL} />}
        />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  config: PropTypes.shape({
    API_URL: PropTypes.string.isRequired,
  }),
};

App.defaultProps = {
  config: {},
};

export default App;
