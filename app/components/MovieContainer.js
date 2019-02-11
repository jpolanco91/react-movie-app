import React from 'react';
import Axios from 'axios';
import { Route, Link } from 'react-router-dom'
import MovieElement from './MovieElement';
import MovieTrailerPlayer from './MovieTrailerPlayer'

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
        {movies.map(({ covertImage, title, year, trailer }) => {
          return (
            <div>
              <Link to='/movie_trailer'> 
                <MovieElement imageSource={covertImage} title={title} year={year} />
              </Link>

              <Route path='/movie_trailer' render={() => (
                  <MovieTrailerPlayer trailerUrl={trailer} />
                )}
              />
            </div>
          )
        })}
      </div>
    );
  }
}

export default MovieContainer;
