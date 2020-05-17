import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile,getStatus,updateStatus,addPost} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isLoadingStatus: state.profilePage.isLoadingStatus,
    status:state.profilePage.status
})
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;  //userin- id-sini elde edirik
        this.props.getProfile(userId);
        this.props.getStatus(userId)
    }
    render() {
        return (<div>
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        </div>)
    }
}
export default compose(
    connect(mapStateToProps, {addPost,getProfile,getStatus,updateStatus}),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)




//
// let WithAuthRedirectComponent=WithAuthRedirect(ProfileContainer); //with HOC
//
// let WithRouterProfileContainer = withRouter(WithAuthRedirectComponent);
// export default connect(mapStateToProps, {
//     getProfile
// })(WithRouterProfileContainer);
