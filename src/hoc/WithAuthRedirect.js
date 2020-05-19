import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToPropsRedirect = state => {
    return {
        isAuth: state.auth.isAuth
    }
}
export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            // setTimeout(() => {
            if (!this.props.isAuth) return <Redirect to='/login'/>
            // }, 1000)
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent;
}
