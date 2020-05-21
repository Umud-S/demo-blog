
import React from 'react';
import profileReducer, {addPost, deletePost} from "./profileReducer";
// import { render } from '@testing-library/react';
// import App from './App';

let state= {
    posts: [
        {id: 1, message: 'salam', likes: 15},
        {id: 2, message: 'Eleyke salam', likes: 35}
    ]
}

test('new post should be added', () => {
    //1.test data
    let message='Salam Dunya'
    let action=addPost(message);

    //2.action
    let newState=profileReducer(state,action);

    //3.expected value
    expect(newState.posts.length).toBe(3);
});
test('added post message value should be correct', () => {
    //1.test data
    let message='Salam Dunya'
    let action=addPost(message);

    //2.action
    let newState=profileReducer(state,action);

    //3.expected value
    expect(newState.posts[2].message).toBe('Salam Dunya');
});

test('delete should be decrement length', () => {
    // const { getByText } = render(<App />);
    // const linkElement = getByText(/learn react/i);
    //1.declare
    let action=deletePost(1);

    //2.action
    let newState=profileReducer(state,action);

    //3.expected value
    expect(newState.posts.length).toBe(1);
});
