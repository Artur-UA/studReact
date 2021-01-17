import React from 'react'

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
                        ? <input autoFocus={true} onBlur={this.closeInput} value={this.state.status}/>
                        : <span onDoubleClick={this.openInput}>{this.props.status}</span> 
                    }
                </div>
            </>
        )
    }
}

export default Status