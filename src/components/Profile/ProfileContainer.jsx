import React, {Component} from 'react';
//import MyContext from '../Redux/context';
import {profileTextActionCreator, infoUserDataThunkCreator, setNewProfileAC} from '../Redux/profileReducer'
import Profile from './Profile';
import {connect} from 'react-redux'
//import axios from 'axios';
import {withRouter} from 'react-router-dom'
import {API_Profile} from '../api/api'

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
            nameId = 1055
        }

        /* axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + nameId) */
        /* API_Profile.getUsersInfo(nameId)
        .then(response => {
            this.props.setNewProfileAC(response.data)
        }) */
        
        this.props.infoUserDataThunkCreator(API_Profile, nameId)
    }

    render(){
        return(
            <Profile {...this.props}/>
        )
    }
    
}

let mapStateToProps = (state) => {
        return{
            messagesValue: state.profilePage.textBeforePost,
            messages: state.profilePage.message,
            profileData: state.profilePage.profileData
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

const WithURLDataProfileContainerComponent = withRouter(ProfileSetContainer)//по факту возвращает новую компоненту в которую закинет ProfileSetContainer и к ним еще добавит инфу из URL 

const ProfileContainer = connect(mapStateToProps, {profileTextActionCreator, setNewProfileAC, infoUserDataThunkCreator}) (WithURLDataProfileContainerComponent);

export default ProfileContainer;