import React from 'react'
import * as axios from 'axios'

const Friends = (props) => {

    if (props.info.length === 0 ) {
        /* props.addFriendAC([
            {id: 1, friend: true, fullName: 'Remi Iren', location: {city: 'Kyiv', country: 'Ukraine'}, img: 'https://lh3.googleusercontent.com/proxy/g8DFkSBR70g-sCJu1gLgn85wajfb9xC11QidsvQ-CEmsidggOTxn0M9dmtg4CRzcPREDPYWXjJzFoEruBpSJbqAQRA4rEtZmplN0TA3QX6l1wF9qyoom7otEIPOdOvHahVTEWYG4M4-kXWg'},
            {id: 2, friend: false, fullName: 'Sofia Loren', location: {city: 'Dnipro', country: 'Ukraine'}, img: 'https://lh3.googleusercontent.com/proxy/g8DFkSBR70g-sCJu1gLgn85wajfb9xC11QidsvQ-CEmsidggOTxn0M9dmtg4CRzcPREDPYWXjJzFoEruBpSJbqAQRA4rEtZmplN0TA3QX6l1wF9qyoom7otEIPOdOvHahVTEWYG4M4-kXWg'},
            {id: 3, friend: true, fullName: 'Viktor Popov', location: {city: 'Kharkiv', country: 'Ukraine'}, img: 'https://lh3.googleusercontent.com/proxy/g8DFkSBR70g-sCJu1gLgn85wajfb9xC11QidsvQ-CEmsidggOTxn0M9dmtg4CRzcPREDPYWXjJzFoEruBpSJbqAQRA4rEtZmplN0TA3QX6l1wF9qyoom7otEIPOdOvHahVTEWYG4M4-kXWg'}
        ]) */
debugger;
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                console.log(response)
                props.addFriendAC(response.data.items)
            })
    }

    console.log(props);
    return (
        <div>
        Friendau
        { props.info.map( i => <div key={i.id}>
                <div>{i.name}</div><span>{i.followed}</span>
                <div><strong>i.location.city</strong>i.location.country</div> 
                <img src={i.photos.small || "https://ihde.tsu.ru/wp-content/uploads/2017/10/no-ava-300x300.png"} alt="Ель-Шевченко"/>
                <div>
                    
                        {i.friend
                            ? <button onClick={() => props.friendshipAC(i.id)}>Отписаться</button>
                            : <button onClick={() => props.friendshipAC(i.id)}>Записаться</button>
                        }
                    
                </div>
            </div>
            )
        }
        </div>
    )
}

export default Friends;