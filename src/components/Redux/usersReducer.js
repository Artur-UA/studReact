export const Friend = "Friend";
export const AddFriend = 'AddFriend';
export const NewList = 'NewList';
export const AllPage = 'AllPage';
export const ToogleIsPreloader = 'ToogleIsPreloader';

const initialState = {
    dataFriend: [/* 
        {id: 1, friend: true, fullName: 'Remi Iren', location: {city: 'Kyiv', country: 'Ukraine'}},
        {id: 2, friend: false, fullName: 'Sofia Loren', location: {city: 'Dnipro', country: 'Ukraine'}},
        {id: 3, friend: true, fullName: 'Viktor Popov', location: {city: 'Kharkiv', country: 'Ukraine'}}
     */],
     totalUsers: 1000,
     usersInPage: 100,
     numberPage: 5,
     isPreloader: false
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case Friend:
            return {
                ...state,
                dataFriend: state.dataFriend.map( d => {
                    if (d.id === action.id){
                        return {...d, followed: !d.followed }
                    }
                    return d;
                })
            }
        case AddFriend:
            return {...state, dataFriend: [...state.dataFriend, ...action.data] }
        case NewList:
            return {...state, dataFriend: action.response.data.items, numberPage: action.pop }
        case AllPage:
            return {...state, totalUsers: action.page }
        case ToogleIsPreloader:
            return {...state, isPreloader: action.boolean }
        default:
            return state;
    }
}

export default usersReducer;

export const friendshipAC = (id) => ({ type: Friend, id })
export const addFriendAC = (data) => ({ type: AddFriend, data })
export const newListAC = (response, pop) => ({ type: NewList, response, pop })
export const allPageAC = (page) => ({ type: AllPage, page })
export const toogleIsPreloaderAC = (boolean) => ({ type: ToogleIsPreloader, boolean })