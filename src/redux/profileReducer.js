import React from 'react';
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
export const addPost = (newText) => {//ActionCreater
    return {
        type: ADD_POST,
        newText
    }
}

const SET_PROFILE = 'SET-PROFILE';
export const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
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
const SET_STATUS = 'SET_STATUS';
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}
const DELETE_POST = 'DELETE_POST';
export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}

let initialState = {
    posts: [
        {id: 1, message: 'salam', likes: 15},
        {id: 2, message: 'Eleyke salam', likes: 35}
    ],
    profile: [],
    isLoadingStatus: true,
    status: 'status no loaded yet'
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                profile: [action.profile]
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newText,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }

        }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id != action.postId)
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
export const getProfile = (userId) => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        let response = await profileAPI.getProfile(userId);
        dispatch(isLoading(false));
        dispatch(setProfile(response));
    }
}
export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response));
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if (response.resultCode === 0) {
            dispatch(setStatus(status))
        }
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
