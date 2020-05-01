import React from 'react';
import {connect} from "react-redux";
import {followAC, setCurPageAC, setPerPageAC, setTotalPageAC, setUsersAC, unfollowAC} from "../../redux/friendsReducer";
import Users from "./Users";
import * as axios from 'axios';


let mapStateToProps = state => {
    return {
        users: state.friendsPage.users,
        currentPage:state.friendsPage.currentPage,
        perPage:state.friendsPage.perPage,
        totalPage: state.friendsPage.totalPage
    }
}
let mapDispatchToProps = dispatch => {
    return {
        friendFollow: (userId) => {
            dispatch(followAC(userId))
        },
        friendUnFollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage:(currentPage)=>{
            dispatch(setCurPageAC(currentPage));
        },
        setPerPage:(pageSize)=>{
            dispatch(setPerPageAC(pageSize))
        },
        setTotalPage:(totalPage)=>{
            dispatch(setTotalPageAC(totalPage))
        }
    }
}
class UserContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length == 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.perPage}`)
                .then(response => {
                        // console.log(response.data.totalCount)
                        this.props.setUsers(response.data.items);
                        this.props.setTotalPage(response.data.totalCount)
                    }
                )
        }
    }
    onPageChanged=(pageNumber)=>{
        if(pageNumber!=this.props.currentPage) {
            this.props.setCurrentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.perPage}`)
                .then(response => {
                        // console.log(response.data.totalCount)
                        this.props.setUsers(response.data.items);
                    }
                )
        }
    }
    onMoreButtonClick=()=>{
        // debugger;
        this.props.setPerPage(this.props.perPage+5);
        let newPageSize=this.props.perPage+5;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${newPageSize}`)
            .then(response => {
                    // console.log(response.data.totalCount)
                    this.props.setUsers(response.data.items);
                }
            )
    }

    render() {
        return <Users data={this.props}
                      onPageChanged={this.onPageChanged}
                      onMoreButtonClick={this.onMoreButtonClick}
        />
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

