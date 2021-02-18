import React, {useState} from 'react';
import './Users.css';
import Preloader from '../preloader/preloader'
import { NavLink } from 'react-router-dom';
//import axios from 'axios'
import {API} from '../api/api'
import cn from 'classnames'

const UsersCom = (props) => {
    
    let pagesCount = Math.ceil( props.totalUsers / props.usersInPage);

    let pages = [];
    for( let i = 1; i <= pagesCount; i++) {
        pages.push(i) 
    }

    const positionCount = Math.ceil(pagesCount / 10); //это величина, на которую можно максиимум изменить positionNumber
    const [positionNumber, changeNumber] = useState(1) //обработчик откуда стартует и функция изменения state 
    const leftPositionNumber = (positionNumber - 1) * 10 + 1;
    const rightPositionNumber = positionNumber * 10;

    return (
        <>
            {props.isPreloader? <Preloader/> : undefined}
            
            <div className={"paginationWrapper"}>
                <div className={"pagination"}>
                    {positionNumber > 1 && <button className={`${"pageNumbers"} ${"prev"}`} onClick={() => {changeNumber(positionNumber -1)}}>Назад</button>}


                    {pages
                        .filter(pop => pop >= leftPositionNumber && pop <= rightPositionNumber)
                        .map((pop) => { 
                        return  <span  /* className={props.numberCount === pop ? 'activePage': "selectedPage"} */
                            className={cn(props.numberPage === pop ? `${"current"} ${"pageNumbers"}` :"pageNumbers")}
                                        onClick={ (e) => {props.newPage(pop)}}
                                        key={pop}
                            >{pop}</span>
                        }
                        )}

                    {/* {pages.map(pop => { 
                        return  <span key={pop} className={props.numberPage === pop ? 'activePage': undefined}
                            onClick={ (e) => {props.newPage(pop)}}
                            >{pop}</span>
                        
                    })} */}

                    {positionCount > positionNumber && 
                        <button className={`${"pageNumbers"} ${"next"}`} onClick={() => {changeNumber(positionNumber + 1)}}>Вперед</button>}
                </div>
                    
                { props.info.map( i => <div key={i.id} >
                        
                        <div>{i.name}</div><span>{i.followed}</span>
                        <div>{i.id}</div>
                        {/* <div><strong>i.location.city</strong>i.location.country</div>  */}
                            <NavLink key={i.id}to={`/profile/${i.id}`}>
                                <img src={i.photos.small || "https://ihde.tsu.ru/wp-content/uploads/2017/10/no-ava-300x300.png"} alt="Ель-Шевченко"/>
                            </NavLink>
                        <div>
                            
                                {i.followed
                                    ? <div>
                                        <button disabled={props.followingInProgress} onClick={() => {
                                            
                                            /* axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${i.id}` , {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': '34443eba-6977-400d-8557-49de76758057'
                                                }
                                            }) */

                                            /* props.followingInProgressAC(true);
                                            API.deleteUsers(i.id);
                                            props.friendshipAC(i.id);
                                            props.followingInProgressAC(false); */


                                            props.followThunkCreator(API.deleteUsers, i)
                                        }
                                        
                                        }><a href="##" className="floating-button">Отписаться</a></button>
                                        <div className='horizontLine'/>
                                    </div>

                                    : <div>
                                        <button disabled={props.followingInProgress} onClick={() => {
                                            
                                            
                                            /* axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${i.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': '34443eba-6977-400d-8557-49de76758057'
                                                }
                                            }) */
                                            /* props.followingInProgressAC(true);
                                            API.postUsers(i.id);
                                            props.friendshipAC(i.id);
                                            props.followingInProgressAC(false); */

                                            props.followThunkCreator(API.postUsers, i)
                                        }
                                        
                                        }><a href="##" className="floating-button">Подписаться</a></button>
                                        <div className='horizontLine'/>
                                    </div>
                                }
                            
                        </div>
                    </div>
                    )
                }
            </div>
        </>
    )
}

export default UsersCom;