import React from 'react';
import {authAPI} from "../api/api";

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
const LOGIN='LOGIN';
// export const loginToSite=(userId)=>{
//     return {
//         type: LOGIN,
//         userId
//     }
// }
let initialState = {
    id: null,
    email: null,
    password:null,
    rememberMe:null,
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
    return(dispatch)=>{
        authAPI.auth()
            .then(response=>{
                // debugger;
                if(response.resultCode===0){                //user eger saytda qeydiyyatdan kecibse sifir qaytarir
                    let {id, login, email}=response.data;   // datani parchalayiriq
                    dispatch(setUserData(id, email, login,true)); // datani gonderirik yeni state kimi
                }
            })
    }
}
export const loginMe=(email,password,rememberMe)=>{
    return (dispatch)=>{
        authAPI.login(email,password,rememberMe).then(response=>{
                if(response.resultCode===0){
                    dispatch(authMe());
                    }
        })
    }
}
export const logOutMe=()=>{
    return (dispatch)=>{
        authAPI.logOut().then(response=>{
                if(response.resultCode===0){
                    dispatch(setUserData(null, null, null,false))
                    }
        })
    }
}


export default authReducer;
