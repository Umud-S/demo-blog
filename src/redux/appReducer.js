import React from 'react';
import {authMe} from "./authReducer";


const SET_INITIALISE = 'SET_INITIAL';
export const setDataInitialise = () => {
    return {
        type: SET_INITIALISE,
    }
}

let initialState = {
    initialised: false
}
let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALISE:
            return {
                ...state,
                initialised: true
            }
        default :
            return state;
    }
}

export const initialiseAPP = () => {
    return (dispatch) => {
        let promise = dispatch(authMe());
        Promise.all([promise])
            .then(() => {
                dispatch(setDataInitialise());
            })
    }
}

export default appReducer;
