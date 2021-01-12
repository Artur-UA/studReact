import React from 'react'
import axios from 'axios'
import NavTest from "./NavTest";
import {connect} from 'react-redux'
import {authTestAC} from './authTestReducer'

class NavConteiner extends React.Component {

    componentDidMount(){

        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
        .then(response => {
            let {id, login, email} = response.data.data
            this.props.authTestAC(id, login, email)
        })
    }

    render() {
        return (
            <NavTest {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    id: state.authTest.id,
    email: state.authTest.email,
    login: state.authTest.login,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authTestAC: (id, login, email) => {
            dispatch(authTestAC(id, login, email))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (NavConteiner)