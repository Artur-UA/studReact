import {authThunkCreator} from './authReducer'

export const SET_INITIALIZING = 'SET_INITIALIZING'

const initialState = {
    initialized : false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZING: {
            return {
                ...state,
                initialized : true
            }
        }
        default: 
            return state;
    }
}

export const initialAC = () => ({type: SET_INITIALIZING})

export const initialThunkCreator = () => (dispatch) => {
        let promise = dispatch(authThunkCreator())
        Promise.all([promise])//когда получим результат от всех диспатчей(они перечислены в массиве), тогда сделаем dispatch
            .then(() => 
                dispatch(initialAC())
        )
}

export default appReducer; 