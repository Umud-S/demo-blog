import React from 'react';

const ADD_POST = 'ADD-POST';
export const addPostAC = (newText) => {//ActionCreater
    return {
        type: ADD_POST,
        message: newText
    }
}
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const updatePostAC = (newText) => {//ActionCreater
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}

let profilePage={
    posts: [
        {id: 1, message: 'salam', likes: 15},
        {id: 2, message: 'Eleyke salam', likes: 35}
    ],
    newPostText: 'UmudS'
}

let profileReducer = (state=profilePage, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likes: 0
            };
            // let stateCopy = {...state};
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);
            // stateCopy.newPostText = '';
            // return stateCopy;
            return {
                ...state,
                posts : [...state.posts, newPost],
                newPostText : ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            // stateCopy.newPostText = action.newText;
            // return stateCopy;
            return {
                ...state,
                newPostText : action.newText
            }
        }
        default :
            return state;
    }
}
export default profileReducer;