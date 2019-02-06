import React from 'react';
import Axios from 'axios';
import MovieElement from './MovieElement';

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    Axios.get('http://varnatrd.tech/api/series').then(({ data }) => {
      this.setState({ movies: data });
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        {movies.map((movie) => {
          return (
            <MovieElement imageSource={movie.covertImage} title={movie.title} year={movie.year} />);
        })}
      </div>
    );
  }
}

export default MovieContainer;
