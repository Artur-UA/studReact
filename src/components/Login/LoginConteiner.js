import React from 'react'
import {/* Field, */ reduxForm} from 'redux-form'
import {loginThunkCreator, logoutThunkCreator} from '../Redux/authReducer'
import {connect} from 'react-redux'
import { maxLengthCreator, required } from '../validate/validate'
import { Input } from '../validate/textArea/FormControl'
import {Redirect} from 'react-router-dom'
import '../validate/textArea/FormControl.css'
import {getAuth} from '../Redux/usersSelector'
import createField from '../validate/field/createField'

const maxLength = maxLengthCreator(20)


const LoginForm = (props) => {

    return (
        <>
            <div>LoginForm</div>
            <form onSubmit={props.handleSubmit}> {/* что будет при нажатии отправки, запустит функцию handleSubmit*/}
{/*                 <div>
                    <Field placeholder='Email' name="email" component={Input}
                            validate={[required, maxLength]}/>
                </div>
                <div>
                    <Field placeholder='Password' name="password" type="password" component={Input}
                            validate={[required, maxLength]}/>
                </div>
                <div>
                    <Field type='checkbox' name="rememberMe" component='input' /> remember me
                </div> */}

                {createField("Email", "email", Input, [required, maxLength], '' ,'')}
                {createField('Password', 'password', Input, [required, maxLength], 'password', '')}
                {createField('', 'rememberMe', 'input', [], 'checkbox', 'remember me.')}

                { props.error && <div className='errorLogin'> 
                    {props.error}
                </div>} {/* покажет только если будет ошибка */}

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

const LoginConteinerTest = (props) => {

    const receivingData = (form) => {
        console.log(form);
        props.loginThunkCreator(form)
    }
    if (props.auth) {
        return <Redirect to='/profile' />
    }   

        return(
            <>
                <h1>Login</h1>
                <h3>Happy new year!</h3>
                <ContactFormLogin onSubmit={receivingData} {...props}/>
            </>
        )
    }


/* let mapStateToProps = (state) => {
    return {
        auth: state.auth.inAuth
    }
} */
const mapStateToProps = (state) => {
    return {
        auth: getAuth(state)
    }
}

const LoginConteiner = connect( mapStateToProps, {loginThunkCreator, logoutThunkCreator}) (LoginConteinerTest)

export default LoginConteiner