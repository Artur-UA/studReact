import React from 'react'
import './Header.css'

const Logout = (props) => {
    return (
        <div className={"bodyButton"}>
            <div id="containerButton">
            <button className={"learn-more"} onClick={props.logoutThunkCreator}>
                <span className={"circle"} aria-hidden="true">
                <span className={"icon arrow"}></span>
                </span>
                <span className={"button-text"}>Logout</span>
            </button>
            </div>
        </div>
    )
}
export default Logout

