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
    getUsers (currentPage = 1,pageSize = 10 ) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    usersUnFollow(u: UserType) {
        return instance.delete(`follow/${u.id}`).then(response => {
            return response.data
        })
    },
    usersFollow (u: UserType) {
        return instance.post(`follow/${u.id}`).then(response => {
            return response.data
        })
    },
    getLoginUsers() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    }
}



