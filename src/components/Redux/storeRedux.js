import {createStore, combineReducers, applyMiddleware} from 'redux'
import navbarReducer from './navbarReducer'
import profileReducer from './profileReducer'
import messageReducer from './messageReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({//собираем воедино разбитые на части редьюсеры 
    navbarPage : navbarReducer,
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer
})
const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;