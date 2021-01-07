import {createStore, combineReducers} from 'redux'
import navbarReducer from './navbarReducer'
import profileReducer from './profileReducer'
import messageReducer from './messageReducer'
import usersReducer from './usersReducer'

let reducers = combineReducers({//собираем воедино разбитые на части редьюсеры 
    navbarPage : navbarReducer,
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer    
})
const store = createStore(reducers)

export default store;