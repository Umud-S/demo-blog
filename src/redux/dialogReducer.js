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
    newMessageText: 'yoo',
    messages: [
        {id: 1, message: 'salam'},
        {id: 2, message: 'Bu gun hardasiz'},
        {id: 3, message: 'ela kecdi'},
        {id: 4, message: 'Yalandan'}
    ],
    dialogs: [
        {id: 1, name: 'Qowqar'},
        {id: 2, name: 'Evez'},
        {id: 3, name: 'Celil'},
        {id: 4, name: 'Ferrux'}
    ]
}
let dialogReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default :
            return state;
    }
}
export default dialogReducer;
