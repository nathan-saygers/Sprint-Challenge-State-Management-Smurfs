import React from 'react';

const SmurfCard = props => {

  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Height: {props.height}</p>
    </div>
  )
}

export default SmurfCard;