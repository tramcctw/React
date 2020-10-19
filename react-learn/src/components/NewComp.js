import React, { Component } from 'react'

export default class NewComp extends Component {
    // constructor(props){
    //     super(props)
    //     // this.txt = React.createRef()
    // }
    handleChange = ()=>{
        // this.txt.current.focus()
        this.txt.focus()

        this.setState({})
    }

    render() {
        return (
            <div>
                {/* <input ref={this.txt}  type="text"/> */}
                <input ref={el=>{
                    console.log('被调用',el);
                    this.txt = el           //这里el表示的是dom元素或者类的实例
                }}  type="text"/>
                <button onClick={
                    this.handleChange
                }>按钮</button>
            </div>
        )
    }
}
