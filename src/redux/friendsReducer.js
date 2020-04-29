import React from 'react';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
export const addMessageAC = (newText) => {
    return {
        type: ADD_MESSAGE,
        postMessage: newText
    }
}
export const updateMessageTextChangeAC = (newText) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: newText
    }
}
let initialState={
    messages: [
        {id: 1, message: 'salam'},
        {id: 2, message: 'Bu gun hardasiz'},
        {id: 3, message: 'ela kecdi'},
        {id: 4, message: 'Yalandan'}
    ]
}
let friendsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            return {
                ...state,
                messages : [...state.messages, newMessage],
                newMessageText:''
            }
        }
        case UPDATE_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText : action.newText
            }
        }
        default :
            return state;
    }
}
export default friendsReducer;
