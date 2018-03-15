import React from 'react';
import PropTypes from 'prop-types';

const random = max => (
  Math.floor(Math.random() * max)
);

const Picture = (props) => {
  const { length } = props.pictures;
  const indices = [random(length), random(length), random(length)];

  return (
    <div>
      <div className="pictureContainer">
        <img className="pictures" alt="" src={props.pictures[indices[0]]} style={{ width: '250px', height: '250px' }} />
        <p className="pictureComment">{props.comment[indices[0]]}
          <br /> by: {props.name[indices[0]]}
        </p>
      </div>
      <div className="pictureContainer">
        <img className="pictures" alt="" src={props.pictures[indices[1]]} style={{ width: '250px', height: '250px' }} />
        <p className="pictureComment">{props.comment[indices[1]]}
          <br /> by: {props.name[indices[1]]}
        </p>
      </div>
      <div className="pictureContainer">
        <img className="pictures" alt="" src={props.pictures[indices[2]]} style={{ width: '250px', height: '250px' }} />
        <p className="pictureComment">{props.comment[indices[2]]}
          <br /> by: {props.name[indices[2]]}
        </p>
      </div>
    </div>
  );
};

Picture.propTypes = {
  pictures: PropTypes.array.isRequired, // eslint-disable-line
  name: PropTypes.array.isRequired, // eslint-disable-line
  comment: PropTypes.array.isRequired, // eslint-disable-line
};

export default Picture;
