import axios from 'axios'

const instanceAPI = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '34443eba-6977-400d-8557-49de76758057'
    }
})


/* export const getUsers = (numberPage, usersInPage) => {

    return instanceAPI.get(`users?page=${numberPage}&count=${usersInPage}`)
        .then(response => {
            return response.data
        })

}

export const deleteUsers = (id) => {

    return instanceAPI.delete(`follow/${id}`)        
}

export const postUsers = (id) => {

    return instanceAPI.post(`follow/${id}`)
} */

export const API = {
    getUsers (numberPage, usersInPage) {
        return instanceAPI.get(`users?page=${numberPage}&count=${usersInPage}`)
            .then(response => {
                return response.data
            })
    },

    deleteUsers (id){
        return instanceAPI.delete(`follow/${id}`)        
    },
    
    postUsers (id) {
        return instanceAPI.post(`follow/${id}`)
    }
}