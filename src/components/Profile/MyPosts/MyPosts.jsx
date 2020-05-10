import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let posts = props.posts;
    let postDatas = posts.map(posts => (
        <Post message={posts.message} likes={posts.likes}/>
    ));

    // let text = React.createRef();
    let onAddPost = (e) => {
        props.addPost(e.target.value);
        props.updatePost('');
    };
    let onPostChange = (e) => {
        props.updatePost(e.target.value);// give value of textarea

    }
    return (
        <div className={p.posts}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange}
                          value={props.newPostText}
                          className={p.textArea}
                          cols="30" rows="3">
                </textarea>
            </div>
            <div>
                <button className={p.buttonPostAdd}
                        onClick={onAddPost}>Add Post
                </button>
            </div>
            {postDatas}
        </div>
    );
}
export default MyPosts; 