import React from 'react';
import './Users.css';


const UsersCom = (props) => {
    
    let pagesCount = Math.ceil( props.totalUsers / props.usersInPage);

    let pages = [];
    for( let i = 1; i <= pagesCount; i++) {
        pages.push(i) 
        }

    return (
        <div>
            {pages.map(pop => { 
                return  <span key={pop}className={props.numberPage === pop ? 'activePage': undefined}
                    onClick={ (e) => {props.newPage(pop)}}
                >{pop}</span>
                
            })}

            { props.info.map( i => <div key={i.id} >
                    
                    <div>{i.name}</div><span>{i.followed}</span>
                    <div><strong>i.location.city</strong>i.location.country</div> 
                    <img src={i.photos.small || "https://ihde.tsu.ru/wp-content/uploads/2017/10/no-ava-300x300.png"} alt="Ель-Шевченко"/>
                    <div>
                        
                            {i.followed
                                ? <button onClick={() => props.friendshipAC(i.id)}>Отписаться</button>
                                : <button onClick={() => props.friendshipAC(i.id)}>Подписаться</button>
                            }
                        
                    </div>
                </div>
                )
            }
            </div>
    )
}

export default UsersCom;