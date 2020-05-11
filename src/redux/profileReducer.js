import React from 'react';
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
export const addPost = (newText) => {//ActionCreater
    return {
        type: ADD_POST,
        message: newText
    }
}
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const updatePost = (newText) => {//ActionCreater
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}
const SET_PROFILE='SET-PROFILE';
export const setProfile=(profile)=>{
        return {type: SET_PROFILE,
            profile
        }
}
const IS_LOADING = 'IS_LOADING';
export const isLoading = (isLoadingStatus) => {
    return {
        type: IS_LOADING,
        isLoadingStatus
    }
}
let initialState={
    posts: [
        {id: 1, message: 'salam', likes: 15},
        {id: 2, message: 'Eleyke salam', likes: 35}
    ],
    newPostText: 'UmudS',
    profile:[],
    isLoadingStatus:true
}

let profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:{
            return {
                ...state,
                profile: [action.profile]
            }
        }
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likes: 0
            }
            return {
                ...state,
                posts : [...state.posts, newPost],
                newPostText : ''
            }

        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            return {
                ...state,
                newPostText : action.newText
            }
        }
        case IS_LOADING:
            return {
                ...state,
                isLoadingStatus: action.isLoadingStatus
            }
        default :
            return state;
    }
}
export  const getProfile=(userId)=> {
    return (dispatch) => {
        dispatch(isLoading(true));
        profileAPI.getProfile(userId)
            .then(response => {
                // debugger;
                dispatch(isLoading(false));
                dispatch(setProfile(response))
            })
    }
}


export default profileReducer;


// let stateCopy = {...state};
// stateCopy.posts = [...state.posts];
// stateCopy.posts.push(newPost);
// stateCopy.newPostText = '';
// return stateCopy;



// stateCopy.newPostText = action.newText;
// return stateCopy;