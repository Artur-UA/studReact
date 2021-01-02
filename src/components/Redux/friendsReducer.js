export const Friend = "Friend";
export const NotFriend = 'NotFriend';

const initialState = {
    dataFriend: [
        {id: 1, fullName: 'Remi Iren', location: {city: 'Kyiv', country: 'Ukraine'}, friend: true},
        {id: 2, fullName: 'Sofia Loren', location: {city: 'Dnipro', country: 'Ukraine'}, friend: false},
        {id: 3, fullName: 'Viktor Popov', location: {city: 'Kharkiv', country: 'Ukraine'}, friend: true}
    ]
}

const friendsReducer = (state = initialState, action) => {
    switch(action) {
        case Friend:
            return console.log('friend');
        case NotFriend:
            return console.log("notFriend");
        default:
            return state;
    }
}

export default friendsReducer;

export const startFriendship = () => ({ type: Friend })
export const endFriendship = () => ({ type: NotFriend })