import {authThunkCreator} from './authReducer'

export const SET_INITIALIZING = 'SET_INITIALIZING'

export type InitialStateType= {
    initialized: boolean
}

const initialState:InitialStateType = {
    initialized : false
}

const appReducer = (state:InitialStateType = initialState, action: any):InitialStateType => {
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

type InitialACType = {
    type: typeof SET_INITIALIZING
}

export const initialAC = ():InitialACType => ({type: SET_INITIALIZING})

export const initialThunkCreator = () => (dispatch: any) => {
        let promise = dispatch(authThunkCreator())
        Promise.all([promise])//когда получим результат от всех диспатчей(они перечислены в массиве), тогда сделаем dispatch
            .then(() => 
                dispatch(initialAC())
        )
}

export default appReducer; 