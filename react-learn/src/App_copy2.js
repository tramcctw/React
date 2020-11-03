import React from 'react';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'

function A(props){
    console.log(props.history)
    return (
        <div>
            <h1>组件B状态数据：{props.history.location.state}</h1>
            <h2>组件A</h2>
            <button onClick={()=>{
                props.history.push('/b','hahah')
            }}>跳转组件B</button>
        </div>
    )
}

function B(props){
    console.log(props.history)
    return (
        <div>
            <h1>组件B状态数据：{props.history.location.state}</h1>
            <h2>组件B</h2>
            <button onClick={()=>{
                props.history.push('/a','hehehhe')
            }}>跳转组件A</button>
        </div>
    )
}

function NotFound(){
    return (
        <div>
            <h2>没有页面～</h2>
        </div>
    )
}


function App(){
    return (
        <Router>
            <Switch>
                <Route path='/a' component={A}/>
                <Route path='/b' component={B}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default App;