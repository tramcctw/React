import React from 'react';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'
// import qs from 'query-string'

function A(props){
    console.log(props.match)
    return (
        <div>
            <p>
                访问的时间：{`${props.match.params.year}-${props.match.params.month}-${props.match.params.day}`}
            </p>
        </div>
    )
}


function App(){
    return (
        <Router>
            <Switch>
                {/* :后面接一个变量,加？可有可无 */}
                {/* <Route path='/a/:year?/:month?/:day?' exact component={A}/> */}
                {/* 后面* 表示任意字符 */}
                <Route path='/a/:year(\d+)/:month(\d+)/:day(\d+)/*' exact component={A}/>
            </Switch>
        </Router>
    )
}

export default App;