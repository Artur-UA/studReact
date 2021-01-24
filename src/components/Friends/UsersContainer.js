import React,{/* Component */ useEffect} from 'react'
import {connect} from 'react-redux'
//import Users from './UsersClass'
import {friendshipAC, addFriendAC, newListAC, allPageAC, toogleIsPreloaderAC, followingInProgressAC, followThunkCreator, getAllUsersThunkCreator, getNewUsersThunkCreator} from '../Redux/usersReducer'
import UsersCom from './UsersCom'
//import * as axios from 'axios'
import {API} from '../api/api'
//import {withAuthRedirect} from '../hoc/withAuthRedirect'
import {getInfo, getTotalUsers, getUsersInPage, getNumberPage, getIsPreloader, getFollowingInProgress} from '../Redux/usersSelector'

/* class Users extends Component {
    
    componentDidMount() { */
        
        /* Старый код */
        /* axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.numberPage}&count=${this.props.usersInPage}`, {
            withCredentials: true
        }) */
        /*this.props.toogleIsPreloaderAC(true) 
            API.getUsers(this.props.numberPage, this.props.usersInPage)
            .then(data => {  //уже приходит не response, а response.data(таким образом лишняя информация остается на уровну DAL )
            console.log(data)
            this.props.addFriendAC(data.items)
            this.props.allPageAC(data.totalCount)
            this.props.toogleIsPreloaderAC(false) 
        })*/

        /* Новый код 
              this.props.getAllUsersThunkCreator(API, this.props.numberPage, this.props.usersInPage)  
   };*/

/* Новый код */
//    newPage = (pop) => { 

        /* Старый код */
        /* axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pop}&count=${this.props.usersInPage}`, {
            withCredentials: true
        }) */
            /*this.props.toogleIsPreloaderAC(true) 
                API.getUsers(pop, this.props.usersInPage)
                .then(response => {
                this.props.newListAC(response, pop);
                this.props.toogleIsPreloaderAC(false)
            }) */

            /* Новый код */
            /* this.props.getNewUsersThunkCreator(API, pop, this.props.usersInPage) 
    }


    render() {
         return <UsersCom totalUsers={ this.props.totalUsers} usersInPage={this.props.usersInPage} numberPage={this.props.numberPage} 
         newPage={this.newPage} info={this.props.info} friendshipAC={this.props.friendshipAC} isPreloader={this.props.isPreloader} 
         followingInProgress={this.props.followingInProgress} followingInProgressAC={this.props.followingInProgressAC}
         followThunkCreator={this.props.followThunkCreator} />
        }
    } */

const Users = ( props) => {
    
    useEffect (() => {
        props.getAllUsersThunkCreator(API, props.numberPage, props.usersInPage)  
    }, [] )

    const newPage = (pop) => {
        props.getNewUsersThunkCreator(API, pop, props.usersInPage) 
    }

    return (
        <UsersCom totalUsers={props.totalUsers} usersInPage={props.usersInPage} numberPage={props.numberPage} 
         newPage={newPage} info={props.info} friendshipAC={props.friendshipAC} isPreloader={props.isPreloader} 
         followingInProgress={props.followingInProgress} followingInProgressAC={props.followingInProgressAC}
         followThunkCreator={props.followThunkCreator} />
    )
}

//let withLoginRedirect = withAuthRedirect(Users)

/* let mapStateToProps = (state) => {
    return {
        info: state.usersPage.dataFriend,
        totalUsers: state.usersPage.totalUsers,
        usersInPage: state.usersPage.usersInPage,
        numberPage: state.usersPage.numberPage,
        isPreloader: state.usersPage.isPreloader,
        followingInProgress : state.usersPage.followingInProgress
    }
} */

let mapStateToProps = (state) => {
    return {
        info: getInfo(state),
        totalUsers: getTotalUsers(state),
        usersInPage: getUsersInPage(state),
        numberPage: getNumberPage(state),
        isPreloader: getIsPreloader(state),
        followingInProgress : getFollowingInProgress(state)
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
    toogleIsPreloaderAC,
    followingInProgressAC,
    followThunkCreator,
    getAllUsersThunkCreator,
    getNewUsersThunkCreator
}) (Users); 

export default UsersContainer; 