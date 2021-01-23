//import React from 'react';
//import MyContext from '../Redux/context';
import {addPostActionCreator, newTextActionCreator, newTextReduxFormActionCreator} from '../Redux/navbarReducer'
import Friends from './friends';
import {connect} from 'react-redux'
import {getDatatFriends, getTextFriends} from '../Redux/usersSelector'

/* const FriendsContainer = (props) => {
 *//*     let data = props.data.navbarPage.friends;
    let dataValue = props.data.navbarPage.texts;

    let addMessage = () => {
        props.dispatch(addPostActionCreator())
    }
 
    let onChangeArea = (text) => {
        props.dispatch(newTextActionCreator(text))
    }  */

   /*  return (
        <MyContext.Consumer>
            { store => {
                let addMessage = () => {
                    store.dispatch(addPostActionCreator())
                }
             
                let onChangeArea = (text) => {
                    store.dispatch(newTextActionCreator(text))
                } 
                
                return (
                    <Friends newTextActionCreator={onChangeArea} addPostActionCreator={addMessage} 
                            data={store.getState().navbarPage.friends} dataValue={store.getState().navbarPage.texts}/>
                )
            }
            }
        </MyContext.Consumer>
    )
}

export default FriendsContainer; */


let mapStateToProps = (state) => {
    return {
        data: getDatatFriends(state),
        dataValue: getTextFriends(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        newTextActionCreator: (text) => {
            let action = newTextActionCreator(text);
            dispatch(action)
        },
        addPostActionCreator: () => dispatch(addPostActionCreator()),
        newTextReduxFormActionCreator:(message) => {
            dispatch(newTextReduxFormActionCreator(message))
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps) (Friends);

export default FriendsContainer;