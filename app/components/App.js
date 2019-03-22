import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Axios from 'axios';
import PropTypes from 'react-proptypes';
import Nav from './Nav';
import MovieContainer from './MovieContainer';
import MovieTrailerPlayer from './MovieTrailerPlayer';

class App extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const {
      config: { API_URL },
    } = this.props;
    this.setMovies(API_URL);
  }

  setMovies(apiUrl) {
    Axios.get(apiUrl).then(({ data = [] }) => {
      this.setState({ movies: data });
    });
  }

  render() {
    const { movies } = this.state;
    const {
      config: { API_URL },
    } = this.props;

    return (
      <BrowserRouter>
        <React.Fragment>
          <Nav />
          <Route exact path="/" render={() => <MovieContainer movies={movies} />} />
          <Route
            path="/movie_trailer/:movieId"
            render={props => <MovieTrailerPlayer {...props} apiUrl={API_URL} />}
          />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  config: PropTypes.shape({
    API_URL: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
