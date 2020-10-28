import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function A(){
    return ReactDOM.createPortal(<>
            <B/>
            <h2>我是A组件</h2>
        </>,  document.getElementsByClassName('modal')[0])
    
}

function B(){
    return (
        <h2>我是B组件</h2>
    )
}



class Portals extends Component {
    render() {
        return (
            <div onClick={()=>{
                console.log('app 被点击')
              }}>
                <h2>我是app</h2>
                <A/>
            </div>
        );
    }
}

export default Portals;