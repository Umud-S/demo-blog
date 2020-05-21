import React from 'react';
import {connect} from "react-redux";
import {
    setCurPage, setPerPage,
    getUsers, followUser, unfollowUser
} from "../../redux/usersReducer";
import Users from "./Users";
// import UsersLocal from "./UsersLocal";
import {compose} from "redux";
import {
    getCurrentPage, getIsFollowClicked,
    getIsLoadingStatus, getPerPage, getTotalPage, getUsersSelector
} from "../../redux/usersSelectors";

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
        let {getUsers, currentPage, perPage} = this.props;
        getUsers(currentPage, perPage);
    }

    onPageChanged = (pageNumber) => {
        let {getUsers, currentPage, perPage, setCurPage} = this.props;
        if (pageNumber != currentPage) {
            setCurPage(pageNumber);
            getUsers(pageNumber, perPage);
        }
    }
    onMoreButtonClick = () => {
        let {getUsers, currentPage, perPage, setPerPage} = this.props;
        setPerPage(perPage + 5);
        let newPageSize = perPage + 5;
        getUsers(currentPage, newPageSize);
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
