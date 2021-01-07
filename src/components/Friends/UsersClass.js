import React, {Component} from 'react'
import * as axios from 'axios'


class Users extends Component {

    newFriend = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            console.log(response)
            this.props.addFriendAC(response.data.items)
        })
    }

    render() {
        console.log(this);
        return (
            <div>
                <button onClick={this.newFriend}>Friendau</button>
            
            { this.props.info.map( i => <div key={i.id}>
                    <div>{i.name}</div><span>{i.followed}</span>
                    <div><strong>i.location.city</strong>i.location.country</div> 
                    <img src={i.photos.small || "https://ihde.tsu.ru/wp-content/uploads/2017/10/no-ava-300x300.png"} alt="Ель-Шевченко"/>
                    <div>
                        
                            {i.followed
                                ? <button onClick={() => this.props.friendshipAC(i.id)}>Отписаться</button>
                                : <button onClick={() => this.props.friendshipAC(i.id)}>Подписаться</button>
                            }
                        
                    </div>
                </div>
                )
            }
            </div>
        )
    }
}

export default Users;