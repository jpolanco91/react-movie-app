import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'react-proptypes';

const MovieElement = ({ imageSource, title, year, id }) => (
  <div className="column is-one-quarter">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imageSource} alt="" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <Link to={`/movie_trailer/${id}`}>
            <p className="title is-4">{title}</p>
          </Link>
          <p className="subtitle is-6">{year}</p>
        </div>
      </div>
    </div>
  </div>
);

MovieElement.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default MovieElement;
