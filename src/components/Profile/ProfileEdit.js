import React from 'react'
import createField from '../validate/field/createField'
import {Input, Textarea} from '../validate/textArea/FormControl'
import {reduxForm} from 'redux-form'
import './Profile.css'


const ProfileEditForm = (props) => {
    console.log(props.error);
    return(
        <form onSubmit={props.handleSubmit}>
            <b>Full name: </b>{createField("Change name", "fullName", Input, [], '', '')}
            <b>Looking for a job : </b>{createField("Looking for a job", "lookingForAJob", Input, [], 'checkbox', '')}
            <b>About me: </b>{createField("About me", "aboutMe", Textarea, [], '', '')}
            <b>A job description : </b>{createField("A job description", "lookingForAJobDescription", Textarea, [], '', '')}

            <div>
                <b>Contacts: </b> {Object.keys(props.initialValues.contacts).map(key => {
                    return <div key={key} className='site'> <b>{key} :{createField(key, 'contacts.' + key, Input, [], '', '')} </b></div>
                })}
            </div> 

            { props.error && <div className='errorLogin'>       
                {props.error}
            </div>} {/* покажет только если будет ошибка */}


            <button>Save</button>
        </form>
    )  
}

const ProfileEdit = reduxForm({
    form: 'profileEdit'
  })(ProfileEditForm)

export default ProfileEdit;


