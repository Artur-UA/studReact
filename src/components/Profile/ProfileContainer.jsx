import React, {Component} from 'react';
//import MyContext from '../Redux/context';
import {profileTextActionCreator} from '../Redux/profileReducer'
import Profile from './Profile';
import {connect} from 'react-redux'
import axios from 'axios';
import {setNewProfileAC} from '../Redux/profileReducer'

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
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
        .then(response => {
            console.log(response)
            this.props.setNewProfile(response.data)

        })
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

let mapDispatchToProps = (dispatch) => {
        return{
            profileTextActionCreator : (text) => {
                let action = profileTextActionCreator(text)
                dispatch(action)
            },
            setNewProfile: (profileData) => {
                dispatch(setNewProfileAC(profileData))
            } 
        }
}


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps) (ProfileSetContainer);

export default ProfileContainer;