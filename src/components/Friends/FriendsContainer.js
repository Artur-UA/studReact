//import React from 'react'
import {connect} from 'react-redux'
import Friends from './Friends'
import {friendshipAC, addFriendAC} from '../Redux/friendsReducer'

let mapStateToProps = (state) => {
    return {
        info: state.friendsPage.dataFriend
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        friendshipAC: (id) => {
            dispatch(friendshipAC(id))
        },
        addFriendAC: (data) => {
            dispatch(addFriendAC(data))
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps) (Friends);

export default FriendsContainer;