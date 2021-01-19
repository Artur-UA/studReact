import React from 'react';
import Post from './Post/Post'
import Preloader from '../preloader/preloader'
//import Dialogs from '../Message/Dialogs/Dialogs'
//import {profileTextActionCreator} from '../Redux/profileReducer'
import Status from './Status'
import {Field, reduxForm} from 'redux-form'

const Profile = (state) => {
    console.log(state);
    /* const messages = state.message.profilePage.message; */
    const mess = state.messages.map(message => <Post key={message.id} name={message.name} like={message.like} />)

    let newElement = React.createRef();
    
    let textSend = () => {
        let text = newElement.current.value
        /* state.profileText2(text) */
        /* state.dispatch({type:'PROFILE_TEXT', textInfo:text}) 
        state.dispatch(profileTextActionCreator(text)) */
        state.profileTextActionCreator(text) 
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

            <div className="post">
                
                <div>
                    <div>
                        <img src={state.profileData.photos.large || 'https://socialvk.ru/wp-content/uploads/avatarka-pustaya-vk_23.jpg'} alt='текст'/>
                        <Status status={state.status} updateStatus={state.updateStatusThunkCreator}/>
                        <br/>
                        {state.status}<br/>
                        {state.profileData.aboutMe}
                        <ul>
                            <li>Facebook : {state.profileData.contacts.facebook}</li>
                            <li>Twitter : {state.profileData.contacts.twitter}</li>
                            <li>GitHub : {state.profileData.contacts.github}</li>
                        </ul>
                        {/* <button onClick={() => (state.updateStatus)}>Статус</button> */}
                        </div>
                    <textarea ref={newElement} 
                            /* value={state.message.profilePage.textBeforePost} */
                            value={state.messagesValue}
                            onChange={textSend}
                    />
                    <button onClick={textSend}>Жми</button>

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

        </div>
    )
}

const ProfileForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='profile' placeholder='Напишите имя'/>
            <button>Начать</button>
        </form>
    )
}

const ProfileFormRedux = reduxForm ({form: 'profilePage'}) (ProfileForm)

export default Profile;