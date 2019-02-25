import React, { Component } from 'react';
import PropTypes from 'react-proptypes';
import Axios from 'axios';

class MovieTrailerPlayer extends Component {
  state = {
    currentMovieTrailerUrl: '',
  };

  componentDidMount() {
    const { apiUrl } = this.props;
    const { match } = this.props;
    const fullTrailerUrl = `${apiUrl}${match.params.movieId}`;

    Axios.get(fullTrailerUrl).then(({ data = [] }) => {
      this.setState({ currentMovieTrailerUrl: data.trailer });
    });
  }

  render() {
    const { currentMovieTrailerUrl } = this.state;
    return (
      <div>
        <a href={currentMovieTrailerUrl}>
          <span>Link to play trailer</span>
        </a>
      </div>
    );
  }
}

MovieTrailerPlayer.propTypes = {
  apiUrl: PropTypes.string.isRequired,
  match: PropTypes.objectOf(PropTypes.object),
};

MovieTrailerPlayer.defaultProps = {
  match: {},
};

export default MovieTrailerPlayer;
