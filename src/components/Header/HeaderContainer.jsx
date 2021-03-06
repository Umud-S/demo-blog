import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOutMe} from "../../redux/authReducer";

class HeaderContainer extends React.Component{
    render() {
        return (
            <Header {...this.props} />// insert all props list to component
        );
    }
}
let mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth,  //get state to insert component
    login:state.auth.login
})
// with react-redux connect method we give state and thunk from reducer to Container component
export default connect(mapStateToProps,{logOutMe})(HeaderContainer) ;



// componentDidMount() {
//    this.props.authMe();    //check User logged
// }
