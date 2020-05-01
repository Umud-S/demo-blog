import React from 'react';

const FOLLOW = 'FOLLOW';
export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

const UNFOLLOW = 'UNFOLLOW';
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

const SET_USERS = 'SET_USERS';
export  const setUsersAC=(users)=>{
    return{
        type:SET_USERS,
        users
    }
}
const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
export const setCurPageAC=(currentPage)=>{
    return{
        type:SET_CURRENT_PAGE,
        currentPage
    }
}
const SET_PER_PAGE='SET_PER_PAGE';
export const setPerPageAC=(perPage)=>{
    return{
        type:SET_PER_PAGE,
        perPage:perPage
    }
}

const TOTAL_PAGE='TOTAL_PAGE';
export const setTotalPageAC=(totalPage)=>{
    return{
        type:TOTAL_PAGE,
        totalPage:totalPage
    }
}

let initialState = {
    users: [],
    currentPage:1,
    perPage:5,
    totalPage:112
}
let friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users:[...action.users]
            }
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
        default :
            return state;
    }
}
export default friendsReducer;
