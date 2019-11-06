import React from 'react';
import {removeFeature} from '../actions';
import { connect } from 'react-redux';

const AddedFeature = props => {
  // console.log(props.state);
  // console.log(props.feature)

  const removeHandler = e => {
    e.preventDefault();
    // console.log(props.state)
    // console.log(props.feature)
    props.removeFeature(props.state, props.feature)
  }

  return (
    <li>
      <button onClick={removeHandler} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    state: state.features,
    addedFeatures: state.features.car.features,
    additionalFeatures: state.features.additionalFeatures
  }
};


export default connect(mapStateToProps, {removeFeature})(AddedFeature);

