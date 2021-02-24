import {UserType} from '../../types/types'
export const FRIEND = "FRIEND";
export const ADD_FRIEND = 'ADD_FRIEND';
export const NEW_LIST = 'NEW_LIST';
export const ALL_PAGE = 'ALL_PAGE';
export const TOOGLE_IS_PRELOADER = 'TOOGLE_IS_PRELOADER';
export const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'


const initialState = {
    dataFriend: [] as Array<UserType>,
    totalUsers: 0,
    usersInPage: 100,
    numberPage: 1,
    isPreloader: true,
    followingInProgress: false
}

type InitialStateType = typeof initialState;

const usersReducer = (state:InitialStateType = initialState, action:any ):InitialStateType => {
    switch(action.type) {
        case FRIEND:
            return {
                ...state,
                dataFriend: state.dataFriend.map( d => {
                    if (d.id === action.id){
                        return {...d, followed: !d.followed }
                    }
                    return d;
                })
            }
        case ADD_FRIEND:
            return {...state, dataFriend: [...state.dataFriend, ...action.data] }
        case NEW_LIST:
            return {...state, dataFriend: action.response.items, numberPage: action.pop }
        case ALL_PAGE:
            return {...state, totalUsers: action.page }
        case TOOGLE_IS_PRELOADER:
            return {...state, isPreloader: action.boolean }
        case FOLLOWING_IN_PROGRESS:
            return {...state, followingInProgress: action.boolean}
        default:
            return state;
    }
}

type friendshipACType = {
    type: typeof FRIEND,
    id: number
}
export const friendshipAC = (id:number):friendshipACType => ({ type: FRIEND, id })
type addFriendACType = {
    type: typeof ADD_FRIEND,
    data: number
} 
export const addFriendAC = (data:number):addFriendACType => ({ type: ADD_FRIEND, data })
type newListACType = {
    type: typeof NEW_LIST,
    response: any,
    pop: any
}
export const newListAC = (response: any, pop: any):newListACType => ({ type: NEW_LIST, response, pop })
type allPageACType = {
    type: typeof ALL_PAGE,
    page: number
}
export const allPageAC = (page: number):allPageACType => ({ type: ALL_PAGE, page })
type toogleIsPreloaderACType = {
    type: typeof TOOGLE_IS_PRELOADER,
    boolean: boolean
}
export const toogleIsPreloaderAC = (boolean: boolean):toogleIsPreloaderACType => ({ type: TOOGLE_IS_PRELOADER, boolean })
type followingInProgressACType = {
    type: typeof FOLLOWING_IN_PROGRESS,
    boolean: boolean
}
export const followingInProgressAC = (boolean: boolean):followingInProgressACType => ({ type: FOLLOWING_IN_PROGRESS, boolean })



export const followThunkCreator = (API:any, info:any) => {
    return (dispatch:any) => {
        dispatch(followingInProgressAC(true));
        API(info.id);
        dispatch(friendshipAC(info.id));
        dispatch(followingInProgressAC(false));
    }
}

/* export const unfollowThunkCreator = (API, info) => {
    return (dispatch) => {
        dispatch(followingInProgressAC(true));
        API.deleteUsers(info.id);
        dispatch(friendshipAC(info.id));
        dispatch(followingInProgressAC(false));
    }
} */

/* копия до рефакторинга
export const getAllUsersThunkCreator = (API, numberPage, usersInPage) => {
    return (dispatch) => {
        dispatch(toogleIsPreloaderAC(true)) 
        API.getUsers(numberPage, usersInPage)
        .then(data => {  //уже приходит не response, а response.data(таким образом лишняя информация остается на уровну DAL )
        dispatch(addFriendAC(data.items))
        dispatch(allPageAC(data.totalCount))
        dispatch(toogleIsPreloaderAC(false))
       
        })
    }
} */

export const getAllUsersThunkCreator = (API:any, numberPage:number, usersInPage:any) => async (dispatch:any) => {
        dispatch(toogleIsPreloaderAC(true)) 
        const data = await API.getUsers(numberPage, usersInPage)
        dispatch(addFriendAC(data.items))
        dispatch(allPageAC(data.totalCount))
        dispatch(toogleIsPreloaderAC(false))
} 

export const getNewUsersThunkCreator = (API:any, pop:any, usersInPage:any) => async (dispatch:any) => {
        dispatch(toogleIsPreloaderAC(true)) 
        const response = await API.getUsers(pop, usersInPage)
            dispatch(newListAC(response, pop));
            dispatch(toogleIsPreloaderAC(false))
    
}

export default usersReducer;