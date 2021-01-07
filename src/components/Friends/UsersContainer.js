//import React from 'react'
import {connect} from 'react-redux'
import Users from './UsersClass'
import {friendshipAC, addFriendAC} from '../Redux/usersReducer'

let mapStateToProps = (state) => {
    return {
        info: state.usersPage.dataFriend
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;