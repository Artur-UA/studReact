import React from 'react'
import createField from '../validate/field/createField'
import {Input, Textarea} from '../validate/textArea/FormControl'
import {reduxForm} from 'redux-form'

const ProfileEditForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <b>Full name: </b>{createField("Change name", "fullName", Input, [], '', '')}
            <b>Looking for a job : </b>{createField("Looking for a job", "lookingForAJob", Input, [], 'checkbox', '')}
            <b>About me: </b>{createField("About me", "aboutMe", Textarea, [], '', '')}
            <b>A job description : </b>{createField("A job description", "lookingForAJobDescription", Textarea, [], '', '')}
            <button>Save</button>
        </form>
    )  
}

const ProfileEdit = reduxForm({
    form: 'profileEdit'
  })(ProfileEditForm)

export default ProfileEdit;


