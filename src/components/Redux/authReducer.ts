import {API_Login, API_Auth} from '../api/api'
import {stopSubmit} from 'redux-form'

export const SET_USER_DATA = 'SET_USER_DATA'
export const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL'

export type InitialStateType = {
    id: null | number,
    login: null | string,
    email: string | null,
    inAuth: boolean,
    captcha: string | null
}

const initialState:InitialStateType = {
        id: null,
        login: null,
        email: null,
        inAuth: false,
        captcha: null
}

const authReducer = (state:InitialStateType = initialState, action: any):InitialStateType => {
    switch(action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL: //если одна из них придет, то закинет в state 
            return {
                ...state,
                ...action.payload
            }
        default: 
            return {...state}
    } 
}

type authReducerPayloadType = {
    id: number | null,
    login:string | null,
    email:string | null,
    inAuth:boolean,
    captcha:string | null
}

type authReducerType = {
    type: typeof SET_USER_DATA,
    payload: authReducerPayloadType
}
type GetCaptchaType = {
    type: typeof GET_CAPTCHA_URL,
    payload: { captcha: string }
}


export const authReducerAC = (id: number | null, login:string | null, email:string | null, inAuth:boolean, captcha:string | null):authReducerType => ({type: SET_USER_DATA, payload: {id, login, email, inAuth, captcha}})

export const getCaptchaAC = (captcha:string):GetCaptchaType => ({ type: GET_CAPTCHA_URL, payload:{captcha}})

export const authThunkCreator = () =>  async (dispatch: any) => {
        const response = await API_Auth()
            
        if(response.data.resultCode === 0 ) {
            let {id, login, email, url} = response.data.data;
            dispatch(authReducerAC(id, login, email, true, url))
        }   
}
/* копия до рефакторинга
export const authThunkCreator = () => {
    return (dispatch) => {
        return API_Auth()
            .then(response => {
            console.log(response);
            if(response.data.resultCode === 0 ) {
                let {id, login, email} = response.data.data;
                dispatch(authReducerAC(id, login, email, true))
            }
        })
    }
} */

export const loginThunkCreator = (data:any) => async (dispatch:any) => {
        let {email, password, rememberMe, url} = data;
        const response = await API_Login.login(email, password, rememberMe, url)
            if(response.data.resultCode === 0) {
                dispatch(authThunkCreator())
            } else {

            if (response.data.resultCode === 10) {
                console.log(response);
                //dispatch(getCaptchaThunkCreator(url))
                dispatch(getCaptchaThunkCreator())
            }

            const message = response.data.messages.length > 0 ? response.data.messages : "Wrong Email or Password"
            const action = stopSubmit("login", {_error: message}) //stopSubmit это спец метод из redux-form который позволяет показать ошибку, настаиваем его и делаем dispatch. В настройке пишем первым пунктом название формы, вторым name Field которое подсветит красным. _error это значит что-то в форме неправильно 
            dispatch(action);
            }
}

export const logoutThunkCreator = () => async (dispatch:any) => {
    const response = await API_Login.logout()
           
        console.log(response);
        if(response.data.resultCode === 0) {
            dispatch(authReducerAC(null, null, null, false, null))
        }
}

export const getCaptchaThunkCreator = () => async (dispatch:any) => {
    const response = await API_Login.captcha();
    const captchaURL = response.data.url
    dispatch(getCaptchaAC(captchaURL))
}

export default authReducer;