import React from "react";
import MyPosts from "./MyPosts";
import {addPostAC, updatePostAC} from "../../../redux/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newText) => {
            //action Creater
            dispatch(addPostAC(newText));
        },
        postChange: (newText) => {
             //action Creater
            dispatch(updatePostAC(newText));
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;

// const MyPostsContainer = (props) => {
//     let state=props.store.getState();
//     let addPost = (newText) => {
//         let action = addPostAC(newText); //action Creater
//         props.dispatch(action);
//     };
//     let postChange = (newText) => {
//         let action = updatePostAC(newText); //action Creater
//         props.dispatch(action);
//     }
//     return (
//         <MyPosts posts={state.profilePage.posts}
//                  newPostText={state.profilePage.newPostText}
//                  onUpdateNewPostText={postChange}
//                  addPost={addPost}
//         />
//     )
// }