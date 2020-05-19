import React from 'react';
import {connect} from "react-redux";
import {
    setCurPage, setPerPage,
    getUsers, followUser, unfollowUser
} from "../../redux/friendsReducer";
import Users from "./Users";
// import UsersLocal from "./UsersLocal";
import {compose} from "redux";
// import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {
    getCurrentPage, getIsFollowClicked,
    getIsLoadingStatus, getPerPage, getTotalPage, getUsersSelector
} from "../../redux/friendsSelectors";

let mapStateToProps = state => {
    return {
        users: getUsersSelector(state),
        currentPage: getCurrentPage(state),
        perPage: getPerPage(state),
        totalPage: getTotalPage(state),
        isLoadingStatus: getIsLoadingStatus(state),
        isFollowClicked: getIsFollowClicked(state)
    }
}

class UserContainer extends React.Component {
    componentDidMount() {
        // debugger;
        this.props.getUsers(this.props.currentPage, this.props.perPage);
    }

    onPageChanged = (pageNumber) => {
        if (pageNumber != this.props.currentPage) {
            this.props.setCurPage(pageNumber);
            this.props.getUsers(pageNumber, this.props.perPage);
        }
    }
    onMoreButtonClick = () => {
        // debugger;
        this.props.setPerPage(this.props.perPage + 5);
        let newPageSize = this.props.perPage + 5;
        this.props.getUsers(this.props.currentPage,newPageSize);

    }
    render() {
        return <Users {...this.props}
                      onPageChanged={this.onPageChanged}
                      onMoreButtonClick={this.onMoreButtonClick}
        />
    }
}
export default compose(
    // WithAuthRedirect,
    connect(mapStateToProps, {
        followUser,
        unfollowUser,
        setCurPage,
        setPerPage,
        getUsers,
    })
)(UserContainer)


//
// export default connect(mapStateToProps, {
//     followUser,
//     unfollowUser,
//     setCurPage,
//     setPerPage,
//     getUsers,
// })(UserContainer);


// let mapDispatchToProps = dispatch => {
//     return {
//         friendFollow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         friendUnFollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurPageAC(currentPage));
//         },
//         setPerPage: (pageSize) => {
//             dispatch(setPerPageAC(pageSize))
//         },
//         setTotalPage: (totalPage) => {
//             dispatch(setTotalPageAC(totalPage))
//         },
//         loadingLogo: (loadingStatus)=>{
//             dispatch(isLoadingAC(loadingStatus))
//         }
//     }
// }
