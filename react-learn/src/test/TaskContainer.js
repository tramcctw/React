import React, { Component } from 'react'
import TaskList from './TaskList'
import AddTask from './AddTask'

export default class TaskContainer extends Component {

    state = {
        taskList:[]
    }

    componentDidMount(){
        let ts = []
        for(let i = 0;i < 10; i++){
            ts.push({
                name:`任务${i}`,
                isFinish:Math.random() > 0.5
            })
        }
        this.setState({
            taskList:ts
        })
    }

    render() {
        return (
            <div>
                <AddTask change={(newTask)=>{
                    this.setState({
                        taskList:[
                            ...this.state.taskList,
                            newTask
                        ]
                    })
                }}/>
                <TaskList tasks={this.state.taskList}/>
            </div>
        )
    }
}
