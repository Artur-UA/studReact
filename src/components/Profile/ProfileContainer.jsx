import React, {Component} from 'react';
//import MyContext from '../Redux/context';
import {profileTextActionCreator, infoUserDataThunkCreator, setNewProfileAC, getStatusAC, getStatusThunkCreator, updateStatusThunkCreator, newProfileFormReduxAC} from '../Redux/profileReducer'
import Profile from './Profile';
import {connect} from 'react-redux'
//import axios from 'axios';
import {/* Redirect, */  withRouter} from 'react-router-dom'
import {API_Profile} from '../api/api'
import {withAuthRedirect} from '../hoc/withAuthRedirect'
import { compose } from 'redux';

/* const ProfileContainer = () => {
    /* const messages = state.state.profilePage.message;
    const messagesValue = state.state.profilePage.textBeforePost;

    let textSend = (text) => { 
        state.dispatch(profileTextActionCreator(text)) 
    } */
    /*return ( 
        <MyContext.Consumer>
            { store => {
                    let textSend = (text) => { 
                        store.dispatch(profileTextActionCreator(text)) 
                    }
                
                    return (<Profile profileTextActionCreator={textSend} 
                                        messages={store.getState().profilePage.message} 
                                        messagesValue={store.getState().profilePage.textBeforePost}/>)
                }
            }

        </MyContext.Consumer>
        )
}
export default ProfileContainer; */

class ProfileSetContainer extends Component {
    
    componentDidMount(){
        let nameId = this.props.match.params.name_id;

        if(!nameId) {
            nameId = this.props.id/* 1055 */
         if (!nameId) {
             this.props.history.push('/login')
           /*  <Redirect to='/users' /> */
        }}

        /* axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + nameId) */
        /* API_Profile.getUsersInfo(nameId)
        .then(response => {
            this.props.setNewProfileAC(response.data)
        }) */
        
        this.props.infoUserDataThunkCreator(API_Profile, nameId)

        /* API_Profile.getUserStatus(nameId)
            .then(response=> {
                this.props.getStatusAC(response.data)
            })
         */
        this.props.getStatusThunkCreator(API_Profile, nameId)

    }

    /* updateStatus() {API_Profile.updateUserStatus(this.props.status)
            .then(response => {
                console.log(response)
            })
    } */

    render(){
       /*  if (!this.props.auth) return <Redirect to={'/login'}/> */
        return(
            <Profile {...this.props}/>
        )
    }
    
}

/* let withLoginRedirect = withAuthRedirect(ProfileSetContainer) */

let mapStateToProps = (state) => {
        return{
            messagesValue: state.profilePage.textBeforePost,
            messages: state.profilePage.message,
            profileData: state.profilePage.profileData,
            auth: state.auth.inAuth,
            status: state.profilePage.status,
            id: state.auth.id
        }
    }

/* let mapDispatchToProps = (dispatch) => {
        return{
            profileTextActionCreator : (text) => {
                let action = profileTextActionCreator(text)
                dispatch(action)
            },
            setNewProfileAC: (profileData) => {
                dispatch(setNewProfileAC(profileData))
            } 
        }
} */

//const WithURLDataProfileContainerComponent = withRouter(withLoginRedirect)//по факту возвращает новую компоненту в которую закинет ProfileSetContainer и к ним еще добавит инфу из URL 

/* const ProfileContainer = connect(mapStateToProps, {profileTextActionCreator, setNewProfileAC, infoUserDataThunkCreator}) (WithURLDataProfileContainerComponent);

export default ProfileContainer; */

export default compose(
    connect(mapStateToProps, {profileTextActionCreator, setNewProfileAC, infoUserDataThunkCreator, getStatusAC, getStatusThunkCreator, updateStatusThunkCreator, newProfileFormReduxAC}),
    withRouter,
    withAuthRedirect 
)
(ProfileSetContainer)