import React from 'react';
import {followAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/helpers";

const FOLLOW = 'FOLLOW';
export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
const UNFOLLOW = 'UNFOLLOW';
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
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
export const followClickedToggle = (isFollowClicked, userId) => {
    return {
        type: IS_FOLLOW_CLICKED,
        isFollowClicked,
        userId
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


let usersReducer = (state = initialState, action) => {

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
                    ? [...state.isFollowClicked, action.userId]
                    : state.isFollowClicked.filter(id => id != action.userId)
            }
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,'id',{followed: true})

            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,'id',{followed: false})
                // users: state.users.map(u=>{
                //     if(u.id==action.userId) return {...u,isFollowClicked: false}
                //     return u
                // })
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
    return async (dispatch) => {
        dispatch(isLoading(true));
        let response = await usersAPI.getUsers(currentPage, perPage);
        dispatch(isLoading(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalPage(response.totalCount));
    }
}
const followUnfollowAsync = async (dispatch, apiMethod, actionCreator, userId) => {
    dispatch(followClickedToggle(true, userId));
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(followClickedToggle(false, userId));
}

export const followUser = (userId) => {
    return  async (dispatch) => {
         followUnfollowAsync(dispatch, followAPI.follow.bind(followAPI), follow, userId)
    }
}
export const unfollowUser = (userId) => {
    // let apiMethod = followAPI.unfollow.bind(followAPI);
    // let actionCreator = unfollow;
    return async (dispatch) => {
         followUnfollowAsync(dispatch, followAPI.unfollow.bind(followAPI), unfollow, userId)
    }
}

export default usersReducer;
