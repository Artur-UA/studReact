//import React from 'react';
//import MyContext from '../Redux/context';
import { dialogTextActionCreator, dialogTextSendActionCreator } from '../Redux/messageReducer';
import Messages from './Message'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../hoc/withAuthRedirect'

/* const MessagesContainer = () => { */

/*     let text = props.state.messagePage.textTest;
    let item = props.state.messagePage.people;
    let mes = props.state.messagePage.dialogs;

    const changedMessage = (text) => {
        props.dispatch(dialogTextActionCreator(text))
    }

    const changedRender = () => {
        props.dispatch(dialogTextSendActionCreator())
    } */

/*     return (
        <MyContext.Consumer>
            {store => {
                const changedMessage = (text) => {
                    store.dispatch(dialogTextActionCreator(text))
                }
                const changedRender = () => {
                    store.dispatch(dialogTextSendActionCreator())
                }
                return (
                    <Messages dialogTextActionCreator={changedMessage} dialogTextSendActionCreator={changedRender} 
                                value = {store.getState().messagePage.textTest} item={store.getState().messagePage.people} 
                                mes={store.getState().messagePage.dialogs}/>   )
            }}
        </MyContext.Consumer>
    )
} */

let mapStateToProps = (state) => {
    return{
        value: state.messagePage.textTest,
        item: state.messagePage.people,
        mes:state.messagePage.dialogs,
        /* auth: state.auth.inAuth */
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        dialogTextActionCreator: (text) => {
            let action = dialogTextActionCreator(text)
            dispatch(action)
        },
        dialogTextSendActionCreator: () => {
            dispatch(dialogTextSendActionCreator())
        }
    }
}

/* let withLoginRedirect = withAuthRedirect(Messages) */

const MessagesContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps) (Messages));

export default MessagesContainer;