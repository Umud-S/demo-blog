import React from 'react';

const ADD_MESSAGE = 'ADD-MESSAGE';
export const addMessage = (newText) => {
    return {
        type: ADD_MESSAGE,
        newText
    }
}

let initialState={
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
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: action.newText
            }
            return {
                ...state,
                messages : [...state.messages, newMessage],
            }
        }

        default :
            return state;
    }
}
export default dialogReducer;



// case UPDATE_MESSAGE_TEXT: {
//     return {
//         ...state,
//         newMessageText : action.newText
//     }
// }

// let stateCopy = {...state};
// stateCopy.messages = [...state.messages]
// stateCopy.messages.push(newMessage);
// stateCopy.newMessageText='';
// return stateCopy;


// let stateCopy = {...state};
// stateCopy.newMessageText = action.newText;
// return stateCopy;
