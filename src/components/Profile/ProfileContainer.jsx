//import React from 'react';
//import MyContext from '../Redux/context';
import {profileTextActionCreator} from '../Redux/profileReducer'
import Profile from './Profile';
import {connect} from 'react-redux'

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


let mapStateToProps = (state) => {
        return{
            messagesValue: state.profilePage.textBeforePost,
            messages: state.profilePage.message
        }
    }

let mapDispatchToProps = (dispatch) => {
        return{
            profileTextActionCreator : (text) => {
                let action = profileTextActionCreator(text)
                dispatch(action)
            } 
        }
}


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps) (Profile);

export default ProfileContainer;