import React, { Component } from 'react'


class A extends Component{

    methods(){
        console.log('hrllos');
    }


    render(){
        return (
            <div></div>
        )
    }
}


// 函数组件不行
function B (){
    return ({

    })
}


export default class Comp extends Component {


    handleChange = ()=>{
        // console.log(this);
        this.refs.txt.focus()
        this.refs.A.methods()
    }

    render() {
        return (
            <div>
                <input ref="txt" type="text"/>
                <A ref='A'/>
                <button onClick={
                    this.handleChange
                }>聚焦</button>
            </div> 
        )
    }
}
