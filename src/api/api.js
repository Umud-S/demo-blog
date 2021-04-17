import * as axios from "axios";

const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        //withCredentials:true, //qeydiyyatdan kecibmi?
        headers: {
            'API-KEY': '13926972-0387-45d0-bf53-e097ceccb75b'
        }
    }
);

export const usersAPI = {
    getUsers(currentPage = 1, perPage = 5) {
        return instance.get(`users?page=${currentPage}&count=${perPage}`, {
            // withCredentials:true
        })
            .then(response => {
                    return response.data;
                }
            )
    }
}

export const authAPI = {
    auth() {
        return instance.get(`/auth/me`
        ).then(response => response.data)
    },
    login(email, password, rememberMe=false){
        return instance.post(`auth/login`,{
            email, password, rememberMe

        } ).then(response=>response.data)
    },
    logOut(){
        return instance.delete(`auth/login`).then(response=>response.data)
    }
}

export const profileAPI = {
    getProfile(userId = 8111) {
        return instance.get(`/profile/${userId}`).then(response => response.data)
    },
    getStatus(userId = 8111) {
        return instance.get(`/profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`/profile/status/`, {status: status}).then(response => response.data)
    }
}

export const followAPI = {
    follow(userId) {
        return instance.post(`/follow/${userId}`, {
            withCredintals: true
        })
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`/follow/${userId}`, {
            withCredintals: true
        })
            .then(response => response.data)
    }
}
