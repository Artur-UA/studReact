import React, {useState, useEffect} from 'react'

const StatusHooks = (props) => {

    const [editMode, editChange] = useState(false);
    const [status, changeStatus] =useState(props.status);

    const onChangeMode = () => {
        editChange(true)
    }

    const onSendStatus = () => {
        editChange(false);
        props.updateStatus(status)
    }

    const onChangeStatus = (e) => {
        changeStatus(e.currentTarget.value)
    }

    useEffect (() => {
        changeStatus(props.status)
    }, [props.status])

    return (
        <div>
            <div>Status</div>
            { 
                !editMode && <span onDoubleClick={onChangeMode} >{props.status || "==="}</span>
            }

            {
                editMode && <input autoFocus={true} onChange={onChangeStatus} value={status} onBlur={onSendStatus} /* value ={props.status} */ />
            }
            
        </div>
    )
}

export default StatusHooks;