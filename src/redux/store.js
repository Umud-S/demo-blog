import React from 'react';
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'salam', likes: 15},
                {id: 2, message: 'Eleyke salam', likes: 35}
            ],
            newPostText: 'UmudS'
        },
        messagePage: {
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
    },
    _callSubscriber() {
        console.log('state Changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //dinleyici
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogReducer(this._state.messagePage, action);
        this._callSubscriber(this._state);
    }
}
export default store;
window.store = store;


// addPost(postMessage) {
//     let newPost = {
//         id: 3,
//         message: postMessage,
//         likes: 0
//     };
//     this._state.profilePage.posts.push(newPost);
//     this._callSubscriber(this._state);
// },
// onUpdateNewPostText(newText) {
//     this._state.profilePage.newPostText = newText;
//     this._callSubscriber(this._state);
// },
// addMessage(postMessage) {
//     let newMessage = {
//         id: 5,
//         message: postMessage
//     }
//     this._state.messagePage.messages.push(newMessage);
//     this._callSubscriber(this._state);
// },