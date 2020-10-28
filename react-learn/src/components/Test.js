import React, { Component } from 'react'

export default class Test extends Component {    
    render() {
        let prev
        return (
            <div onClick={(e)=>{
                console.log(prev === e);
                console.log('div click');
            }}>
                <button onClick={(e)=>{
                    prev = e
                    e.persist()
                    console.log('button click');
                    setTimeout(() => {
                        console.log(e.type)
                    }, 0);
                }}>按钮</button>
            </div>
        )
    }
}

// document.getElementById('root').onclick = function(e){
//     console.log('root click')
//     e.stopPropagation()
// }
