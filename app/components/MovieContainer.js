import React from 'react';
import Axios from 'axios';
import MovieElement from './MovieElement';

class MovieContainer extends React.Component {

  state = {
    movies: []
  }

  componentDidMount() {
    Axios.get('http://varnatrd.tech/api/series').then(({ data = [] }) => {
      this.setState({ movies: data });
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        {movies.map(({ covertImage, title, year }) => {
          return (
            <MovieElement imageSource={covertImage} title={title} year={year} />
          );
        })}
      </div>
    );
  }
}

export default MovieContainer;
