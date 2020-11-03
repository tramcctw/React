import React from 'react';
import {Route,BrowserRouter as Router,Switch,withRouter} from 'react-router-dom'
// import qs from 'query-string'

const BWrapper = withRouter(B)
// 将路由信息传入

function News(props){
    return (
        <div>
            <h2>新闻页面</h2>
            <BWrapper/>
        </div>
    )
}


function B(props) {
    console.log(props)
    return (
        <button onClick={()=>{
            props.history.push('/')
        }}>获取首页</button>
    )
}

function Index(props) {
    return (
        <h2>首页</h2>
    )
}


function App(){
    return (
        <Router>
            <Switch>
                <Route path="/news" exact component={News}/>
                <Route path="/" exact component={Index}/>
            </Switch>
        </Router>
    )
}

export default App;