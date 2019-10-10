// export const ACTION_NAME = 'ACTION_NAME';
// export const actionName = () => ({type: ACTION_NAME});


export const ADD_FEATURE = 'ADD_FEATURE';

export const addFeature = (state, feature) => {
    console.log(state);
    console.log(feature);
    state.car.features.push(feature);
    state.additionalFeatures = state.additionalFeatures.filter(item => item !== feature);
    console.log(state.additionalFeatures);
    console.log(state.car.features);
    const action = {type: ADD_FEATURE, payload:state};
    return action;
};


export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = (featureID) => ({type: REMOVE_FEATURE, payload: featureID});