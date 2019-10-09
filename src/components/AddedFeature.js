import React from 'react';

const AddedFeature = props => {
  console.log(props);
  return (
    <li>
      <button onClick={props.removeFeature(props.feature.id)} className="button">X</button>
      {props.feature.name}
      {console.log(props.feature.id)}
    </li>
  );
};

export default AddedFeature;
