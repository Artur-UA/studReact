import React from 'react';
//import {addPostActionCreator, newTextActionCreator} from '../Redux/navbarReducer'
import {Field, reduxForm} from 'redux-form'
import { Textarea } from '../validate/textArea/FormControl';
import { maxLengthCreator, required } from '../validate/validate';

const Friends = (props) => {
    /*let name = props.fr.friends;
    let img = props.fr.friends;
     let work = props.newText; */

    let newName = props.data.map(names => <div key={names.id}>{names.name}</div>)
    let newImg = props.data.map(imgs => <img key={imgs.id}className='avatar' src={imgs.img} alt="альтернативный текст"/>)

    let newElement = React.createRef();
    
    console.log(props);

    let addMessage = () => {
        /*let text = newElement.current.value;
         props.add(text)
        console.log(text); */
        /* props.dispatch({type:'ADD_POST', info:text}) 
        props.dispatch(addPostActionCreator())*/
        props.addPostActionCreator()
    }
 
    let onChangeArea = (e) => {
        let text = e.target.value;
 /*        work(text) */
        /* props.dispatch({type:'NEW_TEXT', text:text}) */
        props.newTextActionCreator(text)
        
        console.log(text);
    } 
    const sendFormRedux = (data) => {
        console.log(data.friendsMessage)
        props.newTextReduxFormActionCreator(data.friendsMessage)
    }

    return (
        <div>
           {newName}
           <br/>
            {newImg}
            <div>
            <textarea ref={newElement}
                 onChange={onChangeArea}
                 value={props.dataValue} 
            />
            
            </div>
            <button onClick={addMessage}>Нажми</button>

            <FriendsFormRedux onSubmit={sendFormRedux}/>
        </div>
    )
}

const maxLength = maxLengthCreator(11)

const FriendsForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} placeholder='Напишите другу' name='friendsMessage'
                        validate={[required, maxLength]} />
            <button>Нажать</button>
        </form>
    )
}

const FriendsFormRedux = reduxForm({form: 'friends'})(FriendsForm)


export default Friends;