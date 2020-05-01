import React from "react";
import style from './../Friends.module.css';

class User extends React.Component {
    render() {
        return (<div className={style.wrapper}>
        <span className={style.contentBorder}>
        <div className={style.logo}>
        <img className={style.imgLogo} src={this.props.img} alt="logo"/>
            {(this.props.isFollowed) ?<button onClick={() => this.props.friendUnFollow(this.props.id)} className={style.buttonFollow}>Follow</button>
                :<button onClick={() => this.props.friendFollow(this.props.id)} className={style.buttonFollow}>Unfollow</button>}
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