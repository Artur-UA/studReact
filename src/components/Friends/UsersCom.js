import React from 'react';
import './Users.css';
import Preloader from '../preloader/preloader'
import { NavLink } from 'react-router-dom';
//import axios from 'axios'
import {API} from '../api/api'

const UsersCom = (props) => {
    
    let pagesCount = Math.ceil( props.totalUsers / props.usersInPage);

    let pages = [];
    for( let i = 1; i <= pagesCount; i++) {
        pages.push(i) 
        }
    return (
        <>
            {props.isPreloader? <Preloader/> : undefined}
            <div>
                {pages.map(pop => { 
                    return  <span key={pop} className={props.numberPage === pop ? 'activePage': undefined}
                        onClick={ (e) => {props.newPage(pop)}}
                        >{pop}</span>
                    
                })}

                { props.info.map( i => <div key={i.id} >
                        
                        <div>{i.name}</div><span>{i.followed}</span>
                        <div>{i.id}</div>
                        {/* <div><strong>i.location.city</strong>i.location.country</div>  */}
                            <NavLink to={`/profile/${i.id}`}>
                                <img src={i.photos.small || "https://ihde.tsu.ru/wp-content/uploads/2017/10/no-ava-300x300.png"} alt="Ель-Шевченко"/>
                            </NavLink>
                        <div>
                            
                                {i.followed
                                    ? <button disabled={props.followingInProgress} onClick={() => {
                                        
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
                                    
                                    }>Отписаться</button>

                                    : <button disabled={props.followingInProgress} onClick={() => {
                                        
                                        
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
                                    
                                    }>Подписаться</button>
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