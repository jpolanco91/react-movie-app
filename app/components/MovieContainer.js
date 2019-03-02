import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'react-proptypes';
import MovieElement from './MovieElement';

const MovieContainer = ({ movies = [] }) => (
  <div>
    {movies.map(({ covertImage, title, year, _id }) => (
      <Link to={`/movie_trailer/${_id}`}>
        <MovieElement imageSource={covertImage} title={title} year={year} />
      </Link>
    ))}
  </div>
);

MovieContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
MovieContainer.defaultProps = {
  movies: [],
};

export default MovieContainer;
