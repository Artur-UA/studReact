import React from 'react';
//import {addPostActionCreator, newTextActionCreator} from '../Redux/navbarReducer'

const Friends = (props) => {
    /*let name = props.fr.friends;
    let img = props.fr.friends;
     let work = props.newText; */

    let newName = props.data.map(names => <div>{names.name}</div>)
    let newImg = props.data.map(imgs => <img className='avatar' src={imgs.img} alt="альтернативный текст"/>)

    let newElement = React.createRef();
    
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
        </div>
    )
}

export default Friends;