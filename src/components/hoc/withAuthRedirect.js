import React from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

const mapStateToPropsForRedirect = (state) => {
    return{
        auth: state.auth.inAuth
    }
}

export const withAuthRedirect = (Component) => {

    class withRedirect extends React.Component {
        render() {
            if (!this.props.auth) return <Redirect to='/login' />
            if (this.props.auth) return <Component {...this.props}/>
        }
    }

    let WithAuthToLoginRedirect = connect(mapStateToPropsForRedirect)(withRedirect)

    return WithAuthToLoginRedirect;
}
/* 
export default withAuthRedirect; */