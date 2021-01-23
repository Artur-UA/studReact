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





/* 
import React from 'react'

class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    saveStatus = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    changeStatus = () => {
        this.setState({
            editMode: true
        })
    }

    updateStatusUser = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    } 

    render() {
        return (
            <>
                <div>
                    { this.state.editMode ?
                        <input onChange={this.updateStatusUser} autoFocus={true} onBlur={this.saveStatus} value={this.state.status}/>:
                        <span onDoubleClick={this.changeStatus}>{this.props.status}</span>
                    }
                </div>
            </>
        )
    }

}

export default Status */