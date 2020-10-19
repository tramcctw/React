import React, { Component } from 'react'



// function A(props,ref){
//     return (
//         <h1 ref={ref}>hello</h1>
//     )
// }


// const NewA = React.forwardRef(A)
// 调用forwardRef(A)转发返回一个新组件，这个新组建可以帮忙转发


class A extends Component{
    render(){
        return (
            <h2 ref={this.props.abc}>world</h2>
        )
    }
}

const NewA = React.forwardRef((props,ref)=>{
    return <A {...props} abc={ref}/>
})




export default class Transmit extends Component {

    constructor(){
        super()
        this.Aref = React.createRef()
    }


    componentDidMount(){
        console.log(this.Aref);
    }

    render() {
        return (
            <div>
                <NewA ref={this.Aref}></NewA>       
                {/* 传递给函数 */}
            </div>
        )
    }
}
