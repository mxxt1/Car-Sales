import React from 'react';
import {addFeature, removeFeature} from './actions';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';

const App = (props) => {
  console.log(props)
  console.log(props.car)

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={props.removeFeature} addFeature={props.addFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.additionalFeatures} removeFeature={props.removeFeature} addFeature={props.addFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state =>{
  console.log(state);
  return {
    car: state.features.car,
    additionalFeatures: state.features.additionalFeatures,
    additionalPrice: state.features.additionalPrice
  };
}





export default connect(mapStateToProps,{addFeature, removeFeature})(App);
