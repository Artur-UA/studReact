import React from 'react';
import './Profice.css'
import {NavLink} from 'react-router-dom'
//import {ItemMess} from './DialogsItem';
//import {dialogTextActionCreator, dialogTextSendActionCreator} from '../Redux/messageReducer'

const Messages = (props) => {
    /* let item = props.info.messagePage.people;
    let mes = props.info.messagePage.dialogs; */
    

    let dialogsPeople = props.item.map(items => <div><NavLink  to={`/message/${items.id}`}>{items.message}<img className='avatar2' src={items.img}  alt="альтернативный текст"/></NavLink></div>)

    let dialogsMessages = props.mes.map(ItemMess => <div>{ItemMess.message}-{ItemMess.id}</div>)

    const refArea = React.createRef();

    const changedMessage = (e) => {
/*         let valueMessage = refArea.current.value; */
        let valueMessage = e.target.value;
        /* props.dispatch(dialogTextActionCreator(valueMessage)) */
        props.dialogTextActionCreator(valueMessage)
    }

    const changedRender = () => {
        props.dialogTextSendActionCreator()
    }

    return (
        <div className="dialogs">
            <div className="dialogsName">

                {
                    dialogsPeople 
                }
            </div>


                
{/* 
                <div> 
                    <NavLink to='/message/1'>Привет</NavLink> 
                </div>
                <div> 
                    <NavLink to='/message/2'>Приве</NavLink> 
                </div>
                <div> 
                    <NavLink to='/message/3'>Прив</NavLink> 
                </div>
                <div> 
                    <NavLink to='/message/4'>При</NavLink> 
                </div>
                <div> 
                    <NavLink to='/message/5'>Пр</NavLink> 
                </div>
                <div> 
                    <NavLink to='/message/6'>П</NavLink> 
                </div> */}
            <div className="dialogsMessage">
                
                {
                    dialogsMessages
                }
                
                <textarea ref={refArea}
                        onChange={changedMessage}
                        /* value={props.info.messagePage.textTest} */
                        value={props.value}
                        />
                <button onClick={changedRender}>Click</button>

              {/*   {
                    ItemMess.map(ItemMess => {
                        return (
                            <div>{ItemMess.message}-{ItemMess.id}</div>
                        )
                    })
                } */}
                {/* <div> Пока</div> 
                <div> Пок</div>
                <div> По</div>
                <div> П</div> */}
            </div>
            
        </div>
    )
}

export default Messages;