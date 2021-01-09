import React, {Component} from 'react'
import * as axios from 'axios'
//import './Users.css';
import UsersCom from './UsersCom'


class Users extends Component {
    
    /* newFriend = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            console.log(response)
            this.props.addFriendAC(response.data.items)
        })
    } */
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.numberPage}&count=${this.props.usersInPage}`)
            .then(response => {
            console.log(response)
            this.props.addFriendAC(response.data.items)
            this.props.allPageAC(response.data.totalCount)
        })
    };

    newPage = (pop) => {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pop}&count=${this.props.usersInPage}`)
            .then(response => {
                this.props.newListAC(response, pop);
            })
    }

    render() {

        /* let pagesCount = Math.ceil( this.props.totalUsers / this.props.usersInPage);

        let pages = [];

        for( let i = 1; i <= pagesCount; i++) {
            pages.push(i) 
            } */

         return <UsersCom totalUsers={ this.props.totalUsers} usersInPage={this.props.usersInPage} numberPage={this.props.numberPage} newPage={this.newPage} info={this.props.info} friendshipAC={this.props.friendshipAC}/>

            /* <div>
                
                {pages.map(pop => {
                    return  <span className={this.props.numberPage === pop ? 'activePage': undefined}
                        onClick={ (e) => {this.newPage(pop)}}
                    >{pop}</span>
                    
                })}


            { this.props.info.map( i => <div key={i.id} >
                    
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
            </div> */
    }
}

export default Users;