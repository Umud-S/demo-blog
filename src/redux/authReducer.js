import React from 'react';
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA='SET_USER_DATA';
export const setUserData=(id,email,login,isAuth)=>{
    return{
        type:SET_USER_DATA,
        payload:{
            id,email,login,isAuth
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
    userId: null,
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
                ...action.payload,
                isAuth: action.payload.isAuth
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

export const authMe=()=>{
    return async (dispatch)=>{
        let response= await authAPI.auth()
                // debugger;
                if(response.resultCode===0){                //user eger saytda qeydiyyatdan kecibse sifir qaytarir
                    let {id, login, email}=response.data;   // datani parchalayiriq
                    dispatch(setUserData(id, email, login,true)); // datani gonderirik yeni state kimi
                }
    }
}
export const loginMe=(email,password,rememberMe)=>{
    return async (dispatch)=>{
        let response= await authAPI.login(email,password,rememberMe);
                if(response.resultCode===0){
                    dispatch(authMe());
                    }else{
                    dispatch(stopSubmit('login', {_error:'Something is wrong'}))
                }
    }
}
export const logOutMe=()=>{
    return async (dispatch)=>{
        let response= await authAPI.logOut();
                if(response.resultCode===0){
                    dispatch(setUserData(null, null, null,false))
                    }
    }
}
export default authReducer;
