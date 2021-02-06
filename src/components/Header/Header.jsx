import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css'
import Logout from './Logout'

const Header = (props) => {
    return <header className='header'> 
            <div className='login'>
                {
                    props.id === null 
                        ? <NavLink to={'/login'}>Login</NavLink> 
                        : <><NavLink to={'/login'}>{props.login}</NavLink> {/* <button onClick={props.logoutThunkCreator}>Logout</button> */} <Logout {...props}/></>
                }
            </div>
            
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'width="90" height="70" alt='text' />
        
    </header>
}

export default Header;