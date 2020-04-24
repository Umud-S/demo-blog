import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let posts = props.posts;
    let postDatas = posts.map(p => (
        <Post message={p.message} likes={p.likes}/>
    ))
    return (
        <div className={p.posts}>
            <h3>My posts</h3>
            <div>
                <textarea className={p.textArea} name="" cols="30" rows="3"></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
            {postDatas}
        </div>
    );
}
export default MyPosts; 