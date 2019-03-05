import React from 'react';
import PropTypes from 'react-proptypes';
import MovieElement from './MovieElement';

const MovieContainer = ({ movies = [] }) => (
  <section className="section is-medium">
    <div className="container">
      <div className="columns is-multiline">
        {movies.map(({ covertImage, title, year, _id }) => (
          <MovieElement imageSource={covertImage} title={title} year={year} id={_id} />
        ))}
      </div>
    </div>
  </section>
);

MovieContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
MovieContainer.defaultProps = {
  movies: [],
};

export default MovieContainer;
