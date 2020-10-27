import React, { Component } from 'react'

export default class AddTask extends Component {
    state = {
        name:""
    } 
    render() {
        return (
            <div>
                <input type="text" 
                value={this.state.name}
                onChange={e=>{
                    this.setState({
                        name:e.target.value
                    })
                }}/>
                <button onClick={()=>{
                    this.props.change && this.props.change({
                        name:this.state.name,
                        isFinish:false
                    })
                }}>add Task</button>
            </div>
        )
    }
}
