import {API_Profile} from '../api/api'
import {stopSubmit} from 'redux-form'

export const PROFILE_TEXT = 'PROFILE_TEXT';
export const SET_NEW_PROFILE = 'SET_NEW_PROFILE';
export const GET_STATUS = 'GET_STATUS'
export const UPDATE_STATUS = 'UPDATE_STATUS'
export const NEW_PROFILE_REDUX_FORM = 'NEW_PROFILE_REDUX_FORM'
export const SEND_PHOTO_SUCCESS = 'SEND_PHOTO_SUCCESS'


type DataType={
    id: number,
    name: string,
    like: number
}

type initialType = {
    message: Array<DataType>,
    textBeforePost: string,
    profileData: null | number,
    status: string
} 

const initialState:initialType = {
    message:[
    {id:1, name:'Хелло', like:3},
    {id:2, name:'Прив', like:22},
    {id:3, name:'Че', like:0},
    {id:4, name:'Хало', like:9}
    ],
    textBeforePost: 'g',
    profileData: null,
    status: '----'
}


const profileReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case PROFILE_TEXT: {
            /* state.textBeforePost = action.textInfo;
            state.message.push({id : state.message.length + 1, name:action.textInfo, like:69}) */
            
            
            /* let newState = {...state};
            newState.textBeforePost = action.textInfo;
            newState.message = [...state.message];
            newState.message.push({id : state.message.length + 1, name:action.textInfo, like:69})

            return newState; */
            return {...state,
                textBeforePost: action.textInfo,
                message: [...state.message, {id : state.message.length + 1, name:action.textInfo, like:69}]
            }
        }
        case SET_NEW_PROFILE: {
            return {...state, profileData: action.profileData}
        }
        case GET_STATUS: {
            return {...state, status: action.status}
        }
        case NEW_PROFILE_REDUX_FORM: {
            return {
                ...state, 
                message: [...state.message, {id: state.message.length + 1, name: action.profile, like: 38}]
            }
        }
        case SEND_PHOTO_SUCCESS: {
            return {
                ...state , 
                //profileData : {...state.profileData, photos: action.file }
                profileData : { photos: action.file }
            }
        }
        default:
            return state;
    }
}

/* type ACType = 

export const profileTextActionCreator: (text:string) => ({type:string, textInfo:string}) = (text) => ({type:PROFILE_TEXT, textInfo:text}) */
export const profileTextActionCreator = (text:string) => ({type:PROFILE_TEXT, textInfo:text})
export const setNewProfileAC = (profileData:string) => ({type: SET_NEW_PROFILE, profileData})
export const getStatusAC = (info:string) => ({type: GET_STATUS, status: info})
export const newProfileFormReduxAC = (profile:string) => ({type: NEW_PROFILE_REDUX_FORM, profile})
export const sendPhotoAC = (file:string) => ({ type: SEND_PHOTO_SUCCESS, file})

/* копия до рефакторинга
export const infoUserDataThunkCreator = (API_Profile, nameId) => {
    return (dispatch) => {
        API_Profile.getUsersInfo(nameId)
        .then(response => {
            dispatch(setNewProfileAC(response.data))
        })
    }
} */

export const infoUserDataThunkCreator = (nameId:number) => async (dispatch:any) => {
        const response = await API_Profile.getUsersInfo(nameId)
            dispatch(setNewProfileAC(response.data))
}

export const getStatusThunkCreator = (nameId:number) => async (dispatch:any) => {
        const response = await API_Profile.getUserStatus(nameId)
                dispatch(getStatusAC(response.data))
}

export const updateStatusThunkCreator = (status:string) => async (dispatch:any) => { 
        const response = await API_Profile.updateUserStatus(status)
                if (response.data.resultCode === 0) {
                    dispatch(getStatusAC(status))
                }
}

export const sendPhotoThunkCreator = (file:any) => async (dispatch:any) => {
    const response = await API_Profile.sendPhoto(file)
        if(response.data.resultCode === 0) {
            dispatch(sendPhotoAC(response.data.data.photos))
        }
}

export const sendFormDataThunkCreator = (data:any) => async(dispatch:any, getState:any) => { //тут можно не только dispatch но и еще взять state 
    const response = await API_Profile.sendPersonForm(data)
    console.log(response);
        if(response.data.resultCode === 0) {
            dispatch(infoUserDataThunkCreator(getState().auth.id))
        } else {
            const message = response.data.messages.length > 0 ? response.data.messages[0] : "Wrong Email or Password"
                const action = stopSubmit("profileEdit", {_error: message}) //stopSubmit это спец метод из redux-form который позволяет показать ошибку, настаиваем его и делаем dispatch. В настройке пишем первым пунктом название формы, вторым name Field которое подсветит красным. _error это значит что-то в форме неправильно 
                dispatch(action);
                return Promise.reject(response.data.messages[0])
        }
}

export default profileReducer;