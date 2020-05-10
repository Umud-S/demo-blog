import React from 'react';
import Profile from "./Profile";
// import {isLoading} from "../../redux/friendsReducer";
import * as axios from 'axios';
import {connect} from "react-redux";
import {setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

let mapStateToProps=(state)=>({
        profile: state.profilePage.profile

})
class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId=this.props.match.params.userId;
        if(!userId){
            userId=2;
        }
        //this.props.isLoading(true);
        // debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                //this.props.isLoading(false);

                // console.log(response.data);
                this.props.setProfile(response.data)
            })
    }

    render() {
        return (<div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>)
    }
}

let WithRouterProfileContainer=withRouter(ProfileContainer);
export default connect(mapStateToProps,{
    setProfile})(WithRouterProfileContainer);
