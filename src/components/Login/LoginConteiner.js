import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {loginThunkCreator, logoutThunkCreator} from '../Redux/authReducer'
import {connect} from 'react-redux'

const LoginForm = (props) => {
    console.log(props);
    return (
        <>
            <div>LoginForm</div>
            <form onSubmit={props.handleSubmit}> {/* что будет при нажатии отправки, запустит функцию handleSubmit*/}
                <div>
                    <Field placeholder='Email' name="email" component="input"/>
                </div>
                <div>
                    <Field placeholder='Password' name="password" component="input"/>
                </div>
                <div>
                    <Field type='checkbox' name="rememberMe" component="input" /> remember me
                </div>
                <div>
                    <button>Send</button>
                </div>

            </form>

            <div>
                <button onClick={props.logoutThunkCreator}>Logout</button>
            </div>
        </>
    )
}

const ContactFormLogin = reduxForm({
    form: 'login'
  })(LoginForm)

 class LoginConteinerTest extends React.Component {
     debugger
    receivingData = (form) => {
        console.log(form);
        this.props.loginThunkCreator(form)
    }

    render() {
        return(
            <>
                <h1>Login</h1>
                <h3>Happy new year!</h3>
                <ContactFormLogin onSubmit={this.receivingData} {...this.props}/>
            </>
        )
    }
}


const LoginConteiner = connect( null, {loginThunkCreator, logoutThunkCreator}) (LoginConteinerTest)

export default LoginConteiner