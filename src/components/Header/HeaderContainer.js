import React from 'react';
import Header from './Header'
import {connect} from 'react-redux'
//import axios from 'axios'
import {authReducerAC, logoutThunkCreator} from '../Redux/authReducer'

import {getId, getLogin, getEmail} from '../Redux/usersSelector'

class HeaderContainer extends React.Component {

    /* componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true  //это нужно для передачи куков
        }) */
        /* API_Auth()
        .then(response => {
            if(response.data.resultCode === 0 ) {
                let {id, login, email} = response.data.data;
                this.props.authReducerAC(id, login, email);
            }
        })
 
        this.props.authThunkCreator()
    }*/

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return{
        id : getId(state),
        login : getLogin(state),
        email : getEmail(state)
    }
}
/* 
const mapDispatchToProps = (dispatch) => {
    return{
        authReducerAC: (id, login, email) => {
            dispatch(authReducerAC(id, login, email))
        }
    }
}  */

export default connect (mapStateToProps, {authReducerAC, logoutThunkCreator}) (HeaderContainer)