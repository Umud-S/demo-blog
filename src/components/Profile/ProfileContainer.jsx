import React from 'react';
import Profile from "./Profile";
// import {isLoading} from "../../redux/friendsReducer";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isLoadingStatus: state.profilePage.isLoadingStatus

})

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        //this.props.isLoading(true);
        // debugger;
        this.props.getProfile(userId);
    }

    render() {
        return (<div>
            <Profile {...this.props}
                     profile={this.props.profile}
            />
        </div>)
    }
}

let WithRouterProfileContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, {
    getProfile
})(WithRouterProfileContainer);
