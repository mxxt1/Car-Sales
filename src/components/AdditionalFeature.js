import React from 'react';
import {addFeature} from '../actions';

const AdditionalFeature = props => {
  // console.log(props);
  return (
    <li>
      <button onClick={addFeature} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
