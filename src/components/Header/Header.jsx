import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css'

const Header = (props) => {
    console.log(props);
    return <header className='header'>
        {props.login} {props.email}{props.id} 
            <div className='login'>
                <NavLink to={'/auth'}>Login</NavLink>
            </div>
            
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'width="90" height="70" alt='text' />
        
    </header>
}

export default Header;