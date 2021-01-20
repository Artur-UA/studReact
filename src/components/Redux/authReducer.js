import {API_Login} from '../api/api'

export const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
        id: null,
        login: null,
        email: null,
        inAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                inAuth: true
            }
        default: 
            return state;
    } 
}


export const authReducerAC = (id, login, email, boolean) => ({type: SET_USER_DATA, payload: {id, login, email}, inAuth: boolean})

export const authThunkCreator = (API_Auth) => {
    return (dispatch) => {
        API_Auth().then(response => {
            console.log(response);
            if(response.data.resultCode === 0 ) {
                let {id, login, email} = response.data.data;
                dispatch(authReducerAC(id, login, email, true))
            }
        })
    }
}

export const loginThunkCreator = (data) => {
    return (dispatch) => {
        let {email, password, rememberMe} = data;
        API_Login.login(email, password, rememberMe)
            .then(response => {
                console.log(response);
                if(response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(authReducerAC(id, login, email, true))
                }
            })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        API_Login.logout()
            .then(response => {
                console.log(response);
                if(response.data.resultCode === 0) {
                    dispatch(authReducerAC(null, null, null, false))
                }
            })
    }
}

export default authReducer;