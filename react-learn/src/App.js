import React, { Component } from 'react'
// import FuncDefault from './components/FuncDefault'
// import ClassDefault from './components/ClassDefault'
import ValidationComp from './ValidationComp'

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <FuncDefault/> */}
                {/* <ClassDefault/> */}
                <ValidationComp a={1}/>
            </div>
        )
    }
}
