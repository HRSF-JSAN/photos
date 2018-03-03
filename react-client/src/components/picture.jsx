import React from 'react';
import PropTypes from 'prop-types';

const Picture = props => (
  <div>
    {props.pictures.map((picture) => {
      return <div className="container">
      <img className="pictures" alt="" src={picture} style={{ width: '250px', height: '250px' }} />
        <p className="comment">{props.comment} <br /> by: {props.name} </p>
      </div> })}
  </div>
);

Picture.propTypes = {
  pictures: PropTypes.array.isRequired, // eslint-disable-line
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default Picture;
