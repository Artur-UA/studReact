import React from 'react'

class Status extends React.Component {

    

    render() {
        return (
            <>
            <div>
                <span>{this.props.status}</span>
            </div>
            <div><input value={this.props.status}/></div>
            </>
        )
    }
}

export default Status