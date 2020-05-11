import React from 'react';
import {followAPI, usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

const UNFOLLOW = 'UNFOLLOW';
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

const SET_USERS = 'SET_USERS';
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const setCurPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
const SET_PER_PAGE = 'SET_PER_PAGE';
export const setPerPage = (perPage) => {
    return {
        type: SET_PER_PAGE,
        perPage   // sinonim perPage:perPage

    }
}

const TOTAL_PAGE = 'TOTAL_PAGE';
export const setTotalPage = (totalPage) => {
    return {
        type: TOTAL_PAGE,
        totalPage
    }
}
const IS_LOADING = 'IS_LOADING';
export const isLoading = (isLoadingStatus) => {
    return {
        type: IS_LOADING,
        isLoadingStatus
    }
}
const IS_FOLLOW_CLICKED = 'IS_FOLLOW_CLICKED';
export const followClickedToggle = (isFollowClicked, id) => {
    return {
        type: IS_FOLLOW_CLICKED,
        isFollowClicked,
        id
    }
}
let initialState = {
    users: [],
    currentPage: 1,
    perPage: 5,
    totalPage: 112,
    isLoadingStatus: false,
    isFollowClicked: []
}
let friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case IS_FOLLOW_CLICKED:
            return {
                ...state,
                isFollowClicked: action.isFollowClicked
                    ? [...state.isFollowClicked, action.id]
                    : state.isFollowClicked.filter(id => id != action.id)
            }
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id == action.userId) {
                            return {...u, followed: true}
                        }
                        return u
                    }
                )
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id == action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    }
                )
            }
        }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_PER_PAGE:
            return {
                ...state,
                perPage: action.perPage
            }
        case TOTAL_PAGE:
            return {
                ...state,
                totalPage: action.totalPage
            }
        case IS_LOADING:
            return {
                ...state,
                isLoadingStatus: action.isLoadingStatus
            }
        default :
            return state;
    }
}

export const getUsers = (currentPage, perPage) => {  //Thunkcreater
    return (dispatch) => {
        dispatch(isLoading(true));
        usersAPI.getUsers(currentPage, perPage)
            .then(response => {
                    dispatch(isLoading(false));
                    dispatch(setUsers(response.items));
                    dispatch(setTotalPage(response.totalCount));
                }
            )
    }
}
export const followUser = (id) => {
    return (dispatch) => {
        dispatch(followClickedToggle(true,id));
        followAPI.follow(id)
            .then(response => {
                // console.log(response);
                if (response.resultCode === 0) {
                    dispatch(follow(id));
                }
                dispatch(followClickedToggle(false,id));
            })
    }
}
export const unfollowUser = (id) => {
    return (dispatch) => {
        dispatch(followClickedToggle(true,id));
        followAPI.unfollow(id)
            .then(response => {
                // console.log(response);
                if (response.resultCode === 0) {
                    dispatch(unfollow(id));
                }
                dispatch(followClickedToggle(false,id));
            })
    }
}
export default friendsReducer;
