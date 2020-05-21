import React from "react";
import style from '../Users.module.css';
import {NavLink} from "react-router-dom";

class UserLocal extends React.Component {

    render() {
        // let tegDisable = React.createRef();
        return (<div className={style.wrapper} key={this.props.id}>
        <span className={style.contentBorder}>
        <div className={style.logo}>
        <NavLink to={`/profile/${this.props.id}`}>
            <img className={style.imgLogo} src={this.props.img} alt="logo"/>
        </NavLink>
            {(this.props.isFollowed) ?

                <button
                    // ref={tegDisable}
                    onClick={(event) => {
                    let target = event.target;
                    target.disabled= true;
                    target.innerText='please Wait';
                    setTimeout(() => {
                            this.props.friendUnFollow(this.props.id);
                            target.disabled = false;

                    }, 2000)
                }} className={style.buttonFollow}>Follow</button>
                : <button
                    // ref={tegDisable}
                    onClick={(event) => {
                    let target = event.target;
                    target.disabled= true;

                    target.innerText='please Wait';
                    setTimeout(() => {
                            this.props.friendFollow(this.props.id);
                            target.disabled = false;
                        }
                        , 2000)
                }}
                          className={style.buttonFollow}>Unfollow</button>}

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

export default UserLocal;


// let text = React.createRef();
// text.current.value ile teqin valuesin ala bilerik
// ref={text} tagin icine yaza bilerik
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
