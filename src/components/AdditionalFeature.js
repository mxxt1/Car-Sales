import React from 'react';
import {addFeature} from '../actions';
import {connect} from 'react-redux';

const AdditionalFeature = props => {
  console.log(props);

  const clickHandler = e => {
    e.preventDefault();
    console.log(props.feature)
    console.log(props.additionalFeatures)
    console.log(props.state)
    console.log(props.state.car)

    props.addFeature(props.state, props.feature)

  }

  return (
    <li>
      <button onClick={clickHandler} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return{
    state: state.features,
    addedFeatures: state.features.car.features,
    additionalFeatures: state.features.additionalFeatures
  }
};

export default connect(mapStateToProps,{addFeature})(AdditionalFeature);
