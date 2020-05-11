import * as axios from "axios";

const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        // withCredentials:true, //qeydiyyatdan kecibmi?
        headers: {
            'API-KEY': 'b1775b2f-c3a5-4509-8dc9-90b5629de7c3'
        }


    }
);

export const usersAPI = {
    getUsers(currentPage = 1, perPage = 5) {
        return instance(`users?page=${currentPage}&count=${perPage}`, {
            // withCredentials:true
        })
            .then(response => {
                    // console.log(response.data.totalCount)
                    return response.data;
                }
            )
    }
}

export const authAPI = {
    auth() {
        return instance(`/auth/me`, {withCredentials: true}
        ).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId = 2) {

        return instance.get(`/profile/` + userId).then(response => response.data)

    }
}

export const followAPI = {
    follow(id) {
        return instance.post(`/follow/${id}`, {
            withCredintals: true
        })
            .then(response => response)
    },
    unfollow(id) {
        return instance.delete(`/follow/${id}`, {
            withCredintals: true
        })
            .then(response => response)
    }
}