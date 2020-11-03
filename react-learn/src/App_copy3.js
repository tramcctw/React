import React from 'react';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import qs from 'query-string'

function A(props){
    console.log(props.match)
    console.log(props.location)
    console.log(qs.parse(props.location.search))
    console.log(qs.parse(props.location.hash))
    return (
        <div>
            <p>
                访问的地址：{props.location.pathname}
            </p>
        </div>
    )
}


function App(){
    return (
        <Router>
            <Switch>
                <Route path='/a' exact component={A}/>
            </Switch>
        </Router>
    )
}

export default App;