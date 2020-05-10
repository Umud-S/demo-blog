import React from "react";
import style from './../Friends.module.css';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

class User extends React.Component {
    render() {
        // debugger;
        return (<div className={style.wrapper}>
        <span className={style.contentBorder}>
        <div className={style.logo}>
        <NavLink to={`/profile/${this.props.id}`}>
            <img className={style.imgLogo} src={this.props.img} alt="logo"/>
        </NavLink>
            {(this.props.isFollowed) ?
                <button onClick={() =>
                    // this.props.friendUnFollow(this.props.id);

                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${this.props.id}`,
                        {
                            withCredintals: true,
                            headers: {"API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"}

                        })
                        .then(response => {
                            console.log(response);
                            if (response.resultCode === 0) {
                                this.props.friendUnFollow(this.props.id);
                            }
                        })
                } className={style.buttonFollow}>Follow</button>
                : <button onClick={() =>
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${this.props.id}`,
                        {},
                        {
                            withCredintals: true,
                            headers: {"API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"}
                        }
                    )
                        .then(response => {
                            console.log(response);
                            if (response.resultCode === 0) {
                                this.props.friendFollow(this.props.id);
                            }
                        })
                } className={style.buttonFollow}>Unfollow
                </button>}
                </div>
                </span>
                <div className={style.contentBorder}>
                    <div className={style.content}>
                        <div className={style.nameStatus}>
                            <span>{this.props.fullname}</span>
                            <span>{this.props.status}</span>
                        </div>
                        <div className={style.countryCity}>
                            <span>{'this.props.country'}</span>
                            <span>{'this.props.city'}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User;


//
// const User = (props) => {
// // console.log(props.isFollowed);
//     return (<div className={style.wrapper} id={props.id}>
//             <span className={style.contentBorder}>
//             <div className={style.logo}>
//             <img  className={style.imgLogo} src={props.img} alt="logo"/>
//                 {(props.isFollowed) ?
//                     <button onClick={()=>props.friendUnFollow(props.id)} className={style.buttonFollow}>Follow</button>
//                     : <button onClick={()=>props.friendFollow(props.id)} className={style.buttonFollow}>Unfollow</button>
//                     }
//             </div>
//             </span>
//             <div className={style.contentBorder}>
//                 <div className={style.content}>
//                     <div className={style.nameStatus}>
//                         <span>{props.fullname}</span>
//                         <span>{props.status}</span>
//                     </div>
//                     <div className={style.countryCity}>
//                         <span>{'this.props.country'}</span>
//                         <span>{'this.props.city'}</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default User;