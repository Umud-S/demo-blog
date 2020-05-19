import {createSelector} from "reselect";

 const getAllUsers = (state) => {
    return state.friendsPage.users
}
export const getCurrentPage = (state) => {
    return state.friendsPage.currentPage
}
export const getPerPage = (state) => {
    return state.friendsPage.perPage
}
export const getTotalPage = (state) => {
    return state.friendsPage.totalPage
}
export const getIsLoadingStatus = (state) => {
    return state.friendsPage.isLoadingStatus
}

export const getIsFollowClicked = (state) => {
    return state.friendsPage.isFollowClicked
}
export const getUsersSelector=createSelector(getAllUsers, (users)=>{
        return users.filter(u=>true)
    }
)
