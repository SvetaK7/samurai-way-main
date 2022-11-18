import axios from "axios";
import {UserType} from "../redux/state";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ff9bb0f4-746d-449d-8252-493e40d7aa8b'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    usersUnFollow(uID: number) {
        return instance.delete(`follow/${uID}`).then(response => {
            return response.data
        })
    },
    usersFollow(uID: number) {
        return instance.post(`follow/${uID}`).then(response => {
            return response.data
        })
    },

    getProfile(userId: number) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string){
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    getLoginUsers() {
        return instance.get(`auth/me`)
    },
}



