export const Friend = "Friend";
export const AddFriend = 'AddFriend';

const initialState = {
    dataFriend: [/* 
        {id: 1, friend: true, fullName: 'Remi Iren', location: {city: 'Kyiv', country: 'Ukraine'}},
        {id: 2, friend: false, fullName: 'Sofia Loren', location: {city: 'Dnipro', country: 'Ukraine'}},
        {id: 3, friend: true, fullName: 'Viktor Popov', location: {city: 'Kharkiv', country: 'Ukraine'}}
     */]
}

const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case Friend:
            return {
                ...state,
                dataFriend: state.dataFriend.map( d => {
                    if (d.id === action.id){
                        return {...d, friend: !d.friend }
                    }
                    return d;
                })
            }
        case AddFriend:
            return {...state, dataFriend: [...state.dataFriend, ...action.data] }
        default:
            return state;
    }
}

export default friendsReducer;

export const friendshipAC = (id) => ({ type: Friend, id })
export const addFriendAC = (data) => ({ type: AddFriend, data })