import React from 'react';
import Post from './Post/Post'
import Preloader from '../preloader/preloader'
//import Dialogs from '../Message/Dialogs/Dialogs'
//import {profileTextActionCreator} from '../Redux/profileReducer'

const Profile = (state) => {
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
                        <img src={state.profileData.photos.large || 'https://lh3.googleusercontent.com/proxy/QxH2QDTTbgmSQqeYG1CDLnBvr8EoiMOgbmdWOOU6AO2qYCAOSzTPSqvvYebiLYooXCSI23FXMo9d4k0SKcawjKyMONa6ZQ8CZLHgcq9ddKrc9C0'} alt='текст'/>
                        {state.profileData.aboutMe}
                        <ul>
                            <li>Facebook : {state.profileData.contacts.facebook}</li>
                            <li>Twitter : {state.profileData.contacts.twitter}</li>
                            <li>GitHub : {state.profileData.contacts.github}</li>
                        </ul>
                        <button onClick={state.goHome}>Вверх</button>
                        </div>
                    <textarea ref={newElement} 
                            /* value={state.message.profilePage.textBeforePost} */
                            value={state.messagesValue}
                            onChange={textSend}
                            
                    />
                    <button onClick={textSend}>Жми</button>
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

export default Profile;