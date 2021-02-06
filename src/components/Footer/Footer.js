import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className={"social"}>
            <div className="social github">
                <a href="https://github.com/Artur-UA" target="_blank" rel="noreferrer"><i className="fa fa-github fa-2x"></i></a>
            </div>

            <div className="social facebook">
                <a href="https://uk-ua.facebook.com/" target="_blank" rel = "noreferrer"><i className="fa fa-facebook fa-2x"></i></a>    
            </div>
            <div className="social skype">
                <a href="https://www.skype.com/uk/" target="_blank" rel="noreferrer"><i className="fa fa-skype fa-2x"></i></a>
            </div>
            <div className="social telegram">
                <a href="https://web.telegram.org/" target="_blank" rel="noreferrer"><i className="fa fa-paper-plane fa-2x"></i></a>
            </div>
        </div>
    )
}

export default Footer