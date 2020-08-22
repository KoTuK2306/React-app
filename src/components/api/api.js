import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3e2fdf84-ddd0-4444-8816-5015098e09aa'
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
                return response.data
            });
    }
}

export const getUsers = (currentPage, pageSize) =>{
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
}