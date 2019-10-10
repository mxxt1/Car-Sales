import React from 'react';
import {addFeature} from '../actions';
import {connect} from 'react-redux';

const AdditionalFeature = props => {
  console.log(props);
  return (
    <li>
      <button onClick={props.addFeature()} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return{
    addedFeatures: state.features.car.features,
    additionalFeatures: state.features.additionalFeatures
  }
};

export default connect(mapStateToProps,{addFeature})(AdditionalFeature);
