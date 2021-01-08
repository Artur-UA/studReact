import React, {Component} from 'react'
import * as axios from 'axios'
import './Users.css';


class Users extends Component {
    
    /* newFriend = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            console.log(response)
            this.props.addFriendAC(response.data.items)
        })
    } */
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=55&count=3')
        .then(response => {
            console.log(response)
            this.props.addFriendAC(response.data.items)
        })
    };

    render() {

        let pagesCount = Math.ceil( this.props.totalUsers / this.props.usersInPage);

        let pages = [];

        for( let i = 1; i <= pagesCount; i++) {
            pages.push(' ' + i + ' ') 
            }

            console.log(this);
            console.log(this.props.numberPage);

        return (
            <div>
                
                {pages.map(pop => {
                    return  <span className={this.props.numberPage === pop ? 'activePage': undefined}
                        onClick={newList}
                    >{pop}</span>
                    
                })}

                <button className='activePage' onClick={this.newFriend}>Friendau</button>
                
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