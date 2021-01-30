import React from 'react'
import './Profile.css'


const ProfileInfo = (props) => {
    return (
        <>
            {props.isOwner && <button onClick={props.changeEditMode}>Edit</button>}
            <div>
                <b>Full name: </b>{props.data.fullName}
            </div>
            <div>
                <b>About me: </b>{props.data.aboutMe}
            </div>
            <div>
                <b>Id: </b>{props.data.userId}
            </div>
            <div>
                <b>Looking for a job : </b>{props.data.lookingForAJob ? 'Yes' : 'No'}
            </div>
            <div>
                <b>A job description : </b>{props.data.lookingForAJobDescription}
            </div>
            <div>
                <b>Contacts: </b>{ Object.keys(props.data.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.data.contacts[key]}/>
                })}
            </div>
        </>
    )
}

export default ProfileInfo;

const Contact = ({contactTitle, contactValue}) => {
    return <div className='site'><b>{contactTitle}: </b> {contactValue} </div>
} 