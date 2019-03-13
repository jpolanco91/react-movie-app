import React, { Component } from 'react';
import PropTypes from 'react-proptypes';
import Axios from 'axios';

class MovieTrailerPlayer extends Component {
  state = {
    currentMovieTrailerUrl: '',
    movieTitle: '',
    movieYear: '',
  };

  componentDidMount() {
    const { apiUrl, match } = this.props;
    const fullTrailerUrl = `${apiUrl}${match.params.movieId}`;

    Axios.get(fullTrailerUrl).then(({ data = {} }) => {
      this.setState({
        currentMovieTrailerUrl: data.trailer,
        movieTitle: data.title,
        movieYear: data.year,
      });
    });
  }

  render() {
    const { currentMovieTrailerUrl, movieTitle, movieYear } = this.state;
    const ytVideoID = currentMovieTrailerUrl.split(
      /(https?:)(\/\/www\.youtube\.com\/watch\?v=)(\S\D.*)/,
    )[3];

    return (
      <section className="section is-medium">
        <div className="container">
          <div className="card">
            <div className="card-image">
              <div className="videoWrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${ytVideoID}`}
                  frameBorder="0"
                  allow="autoplay"
                  allowFullScreen
                  title="video"
                  width="100%"
                />
              </div>
            </div>
            <div className="card-content">
              <div className="media-content">
                <p className="title is-4">{movieTitle}</p>
                <p className="subtitle is-6">{movieYear}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
