import React from "react";
import MyPosts from "./MyPosts";
import {addPostAC, updatePostAC} from "../../../redux/profileReducer";

const MyPostsContainer = (props) => {
    let state=props.store.getState();
    let addPost = (newText) => {
        let action = addPostAC(newText); //action Creater
        props.dispatch(action);
    };
    let postChange = (newText) => {
        let action = updatePostAC(newText); //action Creater
        props.dispatch(action);
    }
    return (
        <MyPosts posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
                 onUpdateNewPostText={postChange}
                 addPost={addPost}
        />
    )
}
export default MyPostsContainer;


