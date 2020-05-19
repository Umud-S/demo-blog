import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, Form, reduxForm} from "redux-form";
import {maxLengthCreater, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

let maxLength10=maxLengthCreater(10);

const ProfileMyPostAddForm = (props) => {
    return <Form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Write Post'}
                   component={Textarea}
                   name={'myPostAddText'}
                   // className={p.textArea}
                   placeholder={'Text Message'}
                   validate={[required, maxLength10]}
            />
        </div>
        <div>
            <button className={p.buttonPostAdd}>Add Post
            </button>
        </div>
    </Form>
}
const WithProfileMyPostAddForm = reduxForm({form: 'addPostForm'})(ProfileMyPostAddForm)
const MyPosts = (props) => {
    // console.log('renderMyPost')
    let posts = props.posts;
    let postDatas = posts.map(posts => (
        <Post message={posts.message} likes={posts.likes}/>
    ));
    const onAddPost = (values) => {
        props.addPost(values.myPostAddText)
    }

    return (
        <div className={p.posts}>
            <h3>My posts</h3>
            <WithProfileMyPostAddForm onSubmit={onAddPost}/>
            {postDatas}
        </div>
    );
}
export default MyPosts;

// let text = React.createRef();
// let onAddPost = (e) => {
//     props.addPost(e.target.value);
//     props.updatePost('');
// };
// let onPostChange = (e) => {
//     props.updatePost(e.target.value);// give value of textarea
//
// }
//
// const MyPosts = (props) => {
//     let posts = props.posts;
//     let postDatas = posts.map(posts => (
//         <Post message={posts.message} likes={posts.likes}/>
//     ));
//
//     // let text = React.createRef();
//     let onAddPost = (e) => {
//         props.addPost(e.target.value);
//         props.updatePost('');
//     };
//     let onPostChange = (e) => {
//         props.updatePost(e.target.value);// give value of textarea
//
//     }
//     return (
//         <div className={p.posts}>
//             <h3>My posts</h3>
//             <div>
//                 <textarea onChange={onPostChange}
//                           value={props.newPostText}
//                           className={p.textArea}
//                           cols="30" rows="3">
//                 </textarea>
//             </div>
//             <div>
//                 <button className={p.buttonPostAdd}
//                         onClick={onAddPost}>Add Post
//                 </button>
//             </div>
//             {postDatas}
//         </div>
//     );
// }
// export default MyPosts;
