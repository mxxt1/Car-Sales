// export const ACTION_NAME = 'ACTION_NAME';
// export const actionName = () => ({type: ACTION_NAME});


export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = (featureID) => ({type: ADD_FEATURE, payload: featureID});


export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = (featureID) => ({type: REMOVE_FEATURE, payload: featureID});