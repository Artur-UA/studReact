import React,{Component} from 'react'
import {connect} from 'react-redux'
//import Users from './UsersClass'
import {friendshipAC, addFriendAC, newListAC, allPageAC, toogleIsPreloaderAC} from '../Redux/usersReducer'
import UsersCom from './UsersCom'
import * as axios from 'axios'


class Users extends Component {
    
    componentDidMount() {
        this.props.toogleIsPreloaderAC(true)
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.numberPage}&count=${this.props.usersInPage}`)
            .then(response => {
            console.log(response)
            this.props.addFriendAC(response.data.items)
            this.props.allPageAC(response.data.totalCount)
            this.props.toogleIsPreloaderAC(false)
        })
    };

    newPage = (pop) => {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pop}&count=${this.props.usersInPage}`)
            .then(response => {
                this.props.newListAC(response, pop);
            })
    }

    render() {
         return <UsersCom totalUsers={ this.props.totalUsers} usersInPage={this.props.usersInPage} numberPage={this.props.numberPage} newPage={this.newPage} info={this.props.info} friendshipAC={this.props.friendshipAC} isPreloader={this.props.isPreloader}/>
        }
    }


let mapStateToProps = (state) => {
    return {
        info: state.usersPage.dataFriend,
        totalUsers: state.usersPage.totalUsers,
        usersInPage: state.usersPage.usersInPage,
        numberPage: state.usersPage.numberPage,
        isPreloader: state.usersPage.isPreloader
    }
}

/* let mapDispatchToProps = (dispatch) => {
    return {
        friendshipAC: (id) => {
            dispatch(friendshipAC(id))
        },
        addFriendAC: (data) => {
            dispatch(addFriendAC(data))
        },
        newListAC: (response, pop) => {
            dispatch(newListAC(response, pop))
        },
        allPageAC: (newPage) => {
            dispatch(allPageAC(newPage))
        },
        toogleIsPreloaderAC: (boolean) => {
            dispatch(toogleIsPreloaderAC(boolean))
        }
    }
} */

const UsersContainer = connect(mapStateToProps, {
    friendshipAC,
    addFriendAC,
    newListAC,
    allPageAC,
    toogleIsPreloaderAC
}) (Users);

export default UsersContainer;