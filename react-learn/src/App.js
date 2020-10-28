import React, { Component } from 'react';
import ErrorBound from './components/ErrorBound'

function getData(){
    return;
}

function A(){
    return (
        <>
            <h2>我是A组件</h2>
            <B/>
        </>
    )
}

class B extends Component{
    render(){
        return (
            <>
                <h2 onClick={()=>{
                    throw new Error('asd')
                }}>我是B组件</h2>
                <h2>{getData().err}</h2>
            </>
        )
    }
}



class App extends Component {
    render() {
        return (
            <div>
                <ErrorBound>
                    <A/>
                </ErrorBound>
            </div>
        );
    }
}

export default App;