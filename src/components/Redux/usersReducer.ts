export const FRIEND = "FRIEND";
export const ADD_FRIEND = 'ADD_FRIEND';
export const NEW_LIST = 'NEW_LIST';
export const ALL_PAGE = 'ALL_PAGE';
export const TOOGLE_IS_PRELOADER = 'TOOGLE_IS_PRELOADER';
export const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'


const initialState = {
    dataFriend: [],
     totalUsers: 0,
     usersInPage: 100,
     numberPage: 1,
     isPreloader: true,
     followingInProgress: false
}

export type InitialStateType = typeof initialState;

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


export const friendshipAC = (id) => ({ type: FRIEND, id })
export const addFriendAC = (data) => ({ type: ADD_FRIEND, data })
export const newListAC = (response, pop) => ({ type: NEW_LIST, response, pop })
export const allPageAC = (page) => ({ type: ALL_PAGE, page })
export const toogleIsPreloaderAC = (boolean) => ({ type: TOOGLE_IS_PRELOADER, boolean })
export const followingInProgressAC = (boolean) => ({ type: FOLLOWING_IN_PROGRESS, boolean })



export const followThunkCreator = (API, info) => {
    return (dispatch) => {
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

export const getAllUsersThunkCreator = (API, numberPage, usersInPage) => async (dispatch) => {
        dispatch(toogleIsPreloaderAC(true)) 
        const data = await API.getUsers(numberPage, usersInPage)
        dispatch(addFriendAC(data.items))
        dispatch(allPageAC(data.totalCount))
        dispatch(toogleIsPreloaderAC(false))
} 

export const getNewUsersThunkCreator = (API, pop, usersInPage) => async (dispatch) => {
        dispatch(toogleIsPreloaderAC(true)) 
        const response = await API.getUsers(pop, usersInPage)
            dispatch(newListAC(response, pop));
            dispatch(toogleIsPreloaderAC(false))
    
}

export default usersReducer;