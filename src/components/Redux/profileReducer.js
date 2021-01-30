import {API_Profile} from '../api/api'

export const PROFILE_TEXT = 'PROFILE_TEXT';
export const SET_NEW_PROFILE = 'SET_NEW_PROFILE';
export const GET_STATUS = 'GET_STATUS'
export const UPDATE_STATUS = 'UPDATE_STATUS'
export const NEW_PROFILE_REDUX_FORM = 'NEW_PROFILE_REDUX_FORM'
export const SEND_PHOTO_SUCCESS = 'SEND_PHOTO_SUCCESS'

const initialState = {
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


const profileReducer = (state = initialState, action) => {
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
                profileData : {...state.profileData, photos: action.file } 
            }
        }
        default:
            return state;
    }
}

export const profileTextActionCreator = (text) => ({type:PROFILE_TEXT, textInfo:text})
export const setNewProfileAC = (profileData) => ({type: SET_NEW_PROFILE, profileData})
export const getStatusAC = (info) => ({type: GET_STATUS, status: info})
export const newProfileFormReduxAC = (profile) => ({type: NEW_PROFILE_REDUX_FORM, profile})
export const sendPhotoAC = (file) => ({ type: SEND_PHOTO_SUCCESS, file})

/* копия до рефакторинга
export const infoUserDataThunkCreator = (API_Profile, nameId) => {
    return (dispatch) => {
        API_Profile.getUsersInfo(nameId)
        .then(response => {
            dispatch(setNewProfileAC(response.data))
        })
    }
} */

export const infoUserDataThunkCreator = (nameId) => async (dispatch) => {
        const response = await API_Profile.getUsersInfo(nameId)
            dispatch(setNewProfileAC(response.data))
}

export const getStatusThunkCreator = (API_Profile, nameId) => async (dispatch) => {
        const response = await API_Profile.getUserStatus(nameId)
                dispatch(getStatusAC(response.data))
}

export const updateStatusThunkCreator = (status) => async (dispatch) => { 
        const response = await API_Profile.updateUserStatus(status)
                if (response.data.resultCode === 0) {
                    dispatch(getStatusAC(status))
                }
}

export const sendPhotoThunkCreator = (file) => async (dispatch) => {
    const response = await API_Profile.sendPhoto(file)
        if(response.data.resultCode === 0) {
            dispatch(sendPhotoAC(response.data.data.photos))
        }
}

export const sendFormDataThunkCreator = (data) => async(dispatch, getState) => { //тут можно не только dispatch но и еще взять state 
    const response = await API_Profile.sendPersonForm(data)
    console.log(response);
        if(response.data.resultCode === 0) {
            dispatch(infoUserDataThunkCreator(getState().auth.id))
        }
}

export default profileReducer;