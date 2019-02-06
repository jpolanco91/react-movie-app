import React from 'react';
import PropTypes from 'react-proptypes';

function MovieElement(props) {
  const { imageSource } = props;
  const { title } = props;
  const { year } = props;

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
  year: PropTypes.string.isRequired,
};

export default MovieElement;
