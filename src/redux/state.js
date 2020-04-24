import React from 'react';

let state = {
    profilePage: {

        posts: [
            {id: 1, message: 'salam', likes: 15},
            {id: 2, message: 'Eleyke salam', likes: 35}
        ]
    },
    messagePage: {
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
}
export default state;
