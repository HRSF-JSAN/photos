import React from 'react';

const Picture = props => (
  <div>
    {props.pictures.map(picture =>
      <img className="pictures" src={picture} style={{width: "250px", height: "250px"}} />)}
    <p className="comment">{props.comment} <br /> by: {props.name} </p>
  </div>
);

export default Picture;
