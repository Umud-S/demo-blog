import React from 'react';

const SET_USER_DATA='SET_USER_DATA';
export const setUserData=(id,email,login)=>{
    return{
        type:SET_USER_DATA,
        data:{
            id,email,login
        }
    }
}

const  IS_LOADING='IS_LOADING';
export const isLoading=(isLoadingStatus)=>{
    return {
        type:IS_LOADING,
        isLoadingStatus
    }
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false,
    isLoadingStatus:false
}
let authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        case IS_LOADING:
            return {
                ...state,
                isLoadingStatus:action.isLoadingStatus
            }
        default :
            return state;
    }
}
export default authReducer;
