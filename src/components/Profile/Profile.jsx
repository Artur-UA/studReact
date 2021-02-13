import React, {useState} from 'react';
import Post from './Post/Post'
import Preloader from '../preloader/preloader'
//import Dialogs from '../Message/Dialogs/Dialogs'
//import {profileTextActionCreator} from '../Redux/profileReducer'
//import Status from './Status'
import StatusHooks from './StatusHooks.js'
import {/* Field, */ reduxForm} from 'redux-form'
import { maxLengthCreator, required} from '../validate/validate';
import { Textarea } from '../validate/textArea/FormControl';
import createField from '../validate/field/createField'
import ProfileInfo from './ProfileInfo';
import ProfileEdit from './ProfileEdit'

const Profile = (state) => {
    console.log(state);
    /* const messages = state.message.profilePage.message; */
    const mess = state.messages.map(message => <Post key={message.id} name={message.name} like={message.like} />)

    const [isEditMode, changeEditMode] = useState(false)
    let newElement = React.createRef();
    
    let textSend = () => {
        let text = newElement.current.value
        /* state.profileText2(text) */
        /* state.dispatch({type:'PROFILE_TEXT', textInfo:text}) 
        state.dispatch(profileTextActionCreator(text)) */
        state.profileTextActionCreator(text) 
    }

    const sendForm = (form) => {
        state.sendFormDataThunkCreator(form)
            .then( () => {
                 changeEditMode(false)
            }
            )
        
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            state.sendPhotoThunkCreator(e.target.files[0])
        }
    }

    const addNewProfileMessage = (data) => {
        console.log(data.profile)
        state.newProfileFormReduxAC(data.profile)
    } 
        if(!state.profileData) {
            return <Preloader/>
        }
    return (
        <div className='content'>
            <div>
                <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt="альтернативный текст" />
            </div>
                
            <div className='grid_page' >

                <div className='photo'>
                    <img  src={state.profileData.photos.large || 'https://socialvk.ru/wp-content/uploads/avatarka-pustaya-vk_23.jpg'} alt='текст'/>
                    {/* { state.location.pathname === '/profile' ? <button>Change photo</button> : undefined} */}
                    { state.isOwner 
                        ? <input type="file" className='custom-file-input' onChange={onMainPhotoSelected} />
                        
                        : undefined
                    }

                    <span>{state.profileData.userId}-{state.profileData.fullName}</span>
                    {/* <Status status={state.status} updateStatus={state.updateStatusThunkCreator}/> */}
                    <br/>
                    <StatusHooks status={state.status} updateStatus={state.updateStatusThunkCreator}/>
                    

                </div>

                

                <div className='data_page'> 
                    
                    <b>Status: </b>{state.status}<br/>
                    {/* {state.profileData.aboutMe} */}
                    { isEditMode  
                            ? <ProfileEdit onSubmit={sendForm} initialValues={state.profileData} /> //initialValues это свойство reduxform которая раскинет после отправки данные из state в reduxFrom. Тоесть будет происходить обмен информацией между reduxFrom и redux 
                            : <ProfileInfo data={state.profileData} changeEditMode={() => changeEditMode(true)} isOwner={state.isOwner}/>} 

                    {/* <ul>
                        <li>Facebook : {state.profileData.contacts.facebook}</li>
                        <li>Twitter : {state.profileData.contacts.twitter}</li>
                        <li>GitHub : {state.profileData.contacts.github}</li>
                    </ul> */}
                    {/* <button onClick={() => (state.updateStatus)}>Статус</button> */}
                    <textarea ref={newElement} 
                            /* value={state.message.profilePage.textBeforePost} */
                            value={state.messagesValue}
                            onChange={textSend}
                    />
                    <button onClick={textSend}>Жми</button>

                </div>

                <ProfileFormRedux onSubmit={addNewProfileMessage}/>
            
            </div>

        {mess}
        <div>
            <img className='avatar' src="https://chto-takoe-lyubov.net/wp-content/uploads/2019/12/Pyatachok-zagadki.jpg" width="100" height="100" alt="альтернативный текст" />Halo
        </div>
        
        <div>
            post 2
        </div>
            
        </div>
    )
}

const maxLength = maxLengthCreator(7)

const ProfileForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            {/* <Field component={Textarea} name='profile' 
                        placeholder='Напишите имя' validate={[required, maxLength]}/> */}
            {createField('Напишите имя', 'profile', Textarea, [required, maxLength])}
            <button>Начать</button>
        </form>
    )
}

const ProfileFormRedux = reduxForm ({form: 'profilePage'}) (ProfileForm)

export default Profile;