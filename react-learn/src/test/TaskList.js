import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Task from './Task'
export default class TaskList extends Component {

    static propTypes = {
        tasks:PropTypes.arrayOf(PropTypes.shape({
            name:PropTypes.string.isRequired,
            isFinish:PropTypes.bool.isRequired
        })).isRequired
    }
        
    render() {
        console.log(this.props.tasks);
        const bs = this.props.tasks.map((it,id)=>{
            return <Task key={id} {...it}/>
        })
        return (
            <ul>
              {bs}  
            </ul>
        )
    }
}
