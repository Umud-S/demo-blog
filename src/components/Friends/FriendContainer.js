import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";

let mapStateToProps = state => {
    return {
        // friendsPage: state.friendsPage
    }
}
let mapDispatchToProps = dispatch => {
    return {
        // addButtonClick: (newText) => {
        //     dispatch(addMessageAC(newText));
        // },
        // textChange: (newText) => {
        //     dispatch(updateMessageTextChangeAC(newText));
        }
    }

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;
