import * as axios from 'axios'

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
    getUsers(numberPage, usersInPage) {
        return instanceAPI.get(`users?page=${numberPage}&count=${usersInPage}`)
            .then(response => {
                return response.data
            })
    },
    deleteUsers(id){
        return instanceAPI.delete(`follow/${id}`)        
    }, 
    postUsers(id) {
        return instanceAPI.post(`follow/${id}`)
    }
}


export const API_Profile = {
    getUsersInfo (idUsers) {
        return instanceAPI.get('profile/' + idUsers)
    },
    getUserStatus(id) {
        return instanceAPI.get('profile/status/' + id)
    },
    updateUserStatus(status) {
        return instanceAPI.put('profile/status', {status: status})
    },
    sendPhoto(file) {
        let formData = new FormData();
        formData.append('image', file)
        return instanceAPI.put('/profile/photo', formData)
    },
    sendPersonForm(data) {
        return instanceAPI.put("/profile", data)
    }
}

export const API_Auth = () => {
    return instanceAPI.get('auth/me')
}

export const API_Login = {
    
    login(email, password, rememberMe = false, captcha = null) {
        return instanceAPI.post('/auth/login', {email: email, password: password, rememberMe, captcha})
    },
    logout() {
        return instanceAPI.delete('/auth/login')
    },
    captcha() {
        return instanceAPI.get('/security/get-captcha-url')
    }
}