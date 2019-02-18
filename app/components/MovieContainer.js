import React from 'react';
import { Link } from 'react-router-dom';
import MovieElement from './MovieElement';

const MovieContainer = ({ movies }) => (
  <div>
    {movies.map(({ covertImage, title, year, _id }) => (
      <Link to={`/movie_trailer/${_id}`}>
        <MovieElement imageSource={covertImage} title={title} year={year} />
      </Link>
    ))}
  </div>
);

export default MovieContainer;
