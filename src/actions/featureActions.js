// export const ACTION_NAME = 'ACTION_NAME';
// export const actionName = () => ({type: ACTION_NAME});


export const ADD_FEATURE = 'ADD_FEATURE';

export const addFeature = (featureArray, feature) => {
    
    
    
    const action = {type: ADD_FEATURE, payload: {featureArray, feature}};
    return action;
};


export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = (featureID) => ({type: REMOVE_FEATURE, payload: featureID});