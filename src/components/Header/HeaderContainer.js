import React from 'react';
import Header from './Header'
import {connect} from 'react-redux'
import axios from 'axios'
import {authReducerAC} from '../Redux/authReducer'


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true  //это нужно для передачи куков
        })
        .then(response => {
            if(response.data.resultCode === 0 ) {
                let {id, login, email} = response.data.data;
                this.props.authReducerAC(id, login, email);
            }
            
        })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return{
        id:state.auth.id,
        login:state.auth.login,
        email:state.auth.email
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

export default connect (mapStateToProps, {authReducerAC}) (HeaderContainer)

