/* import React from 'react'

class Status extends React.Component {

    state = {
        changeStatus: false,
        status: this.props.status
    }

    openInput = () => {
        this.setState({ 
               changeStatus : true
        })
    }

    closeInput = () => {
        this.setState ({
            changeStatus : false
        })
        this.updateStatusThunkCreator()
    }




    render() {
        console.log(this)
        return (
            <>
                <div>
                    { this.state.changeStatus  
                        ? <input onChange={} autoFocus={true} onBlur={this.closeInput} value={this.state.status}/>
                        : <span onDoubleClick={this.openInput}>{this.props.status}</span> 
                    }
                </div>
            </>
        )
    }
}

export default Status */



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

export default Status