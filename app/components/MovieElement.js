import React from 'react';
import PropTypes from 'react-proptypes';

function MovieElement({ imageSource, title, year }) {
  return (
    <div>
      <img src={imageSource} alt="" />
      <div>{title}</div>
      <div>{year}</div>
    </div>
  );
}

MovieElement.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default MovieElement;
