import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css'
import './Header.css';
import Logout from './Logout'

const Header = (props) => {
    return <header className='header'> 
            <div className='login'>
                {
                    props.id === null 
                        ? <NavLink to={'/login'}>Login</NavLink> 
                        : <>
                            <span className="nameUser"><b>{props.login}</b></span>
                            {/*  <NavLink to={'/login'} className={'nameUser'}>{props.login}</NavLink>  */} 
                            {/* <button onClick={props.logoutThunkCreator}>Logout</button> */} 
                            <Logout {...props}/>
                        </>
                }
            </div>
            
        <img src='http://pngimg.com/uploads/2021_year/2021_year_PNG25.png' alt='text' />
        
    </header>
}

export default Header;