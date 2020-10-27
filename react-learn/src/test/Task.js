import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Task.css'
import equalObj from '../utils/equalObject'

function Task(props){
    console.log("Task render");
    return (
            <li className={props.isFinish ? 'finish':'default'}>
                {props.name}                  
            </li>
        )
}

Task.propTypes = {
    name:PropTypes.string.isRequired,
    isFinish:PropTypes.bool.isRequired
}

export default React.memo(Task)



// export default class Task extends Component {

//     static propTypes = {
//         name:PropTypes.string.isRequired,
//         isFinish:PropTypes.bool.isRequired
//     }

//     shouldComponentUpdate(nextProps,nextState){
//         if(equalObj(this.props,nextProps) && equalObj(this.state,nextState)){
//             return false
//         }
//         return true
//     }


//     render() {
//         console.log('Task render');
//         return (
//             <li className={this.props.isFinish ? 'finish':'default'}>
//                 {this.props.name}                  
//             </li>
//         )
//     }
// }
