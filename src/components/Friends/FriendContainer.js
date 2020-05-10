import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    isLoading,
    setCurPage,
    setPerPage,
    setTotalPage,
    setUsers
} from "../../redux/friendsReducer";
import Users from "./Users";
import * as axios from 'axios';

let mapStateToProps = state => {
    return {
        users: state.friendsPage.users,
        currentPage: state.friendsPage.currentPage,
        perPage: state.friendsPage.perPage,
        totalPage: state.friendsPage.totalPage,
        isLoadingStatus: state.friendsPage.isLoadingStatus
    }
}

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.isLoading(true);
        // // console.log(this.props);
        // if (this.props.users.length == 0) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.perPage}`,{
            // withCredentials:true
        })
            .then(response => {
                    // console.log(response.data.totalCount)
                    this.props.isLoading(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalPage(response.data.totalCount)
                }
            )
    }

    onPageChanged = (pageNumber) => {
        this.props.isLoading(true);
        if (pageNumber != this.props.currentPage) {
            this.props.setCurPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.perPage}`,{
                // withCredentials:true
            })
                .then(response => {
                        // console.log(response.data.totalCount)
                        this.props.isLoading(false);
                        this.props.setUsers(response.data.items);
                    }
                )
        }
    }

    onMoreButtonClick = () => {
        // debugger;
        this.props.isLoading(true);
        this.props.setPerPage(this.props.perPage + 5);
        let newPageSize = this.props.perPage + 5;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${newPageSize}`,{
            // withCredentials:true
        })
            .then(response => {
                    // console.log(response.data.totalCount)
                    this.props.isLoading(false);
                    this.props.setUsers(response.data.items);
                }
            )
    }

    render() {
        return <Users {...this.props}
                      onPageChanged={this.onPageChanged}
                      onMoreButtonClick={this.onMoreButtonClick}
                      // onFollow={this.onFollow}
        />
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurPage,
    setPerPage,
    setTotalPage,
    isLoading
})(UserContainer);


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