import React, { Component } from 'react'
import PropTypes from 'prop-types'


B.contextTypes = {
    a:PropTypes.number,
    b:PropTypes.string,
    change:PropTypes.func
}

export function B(props,context){
    // 就近找
    console.log('我是B组件',context.a);

    return(
        <>
            <div>B组件a:{context.a}</div>
            <button onClick={()=>{context.change(context.a+2)}}>B组件：a+2</button>
        </>

    )
}




export class A extends Component{
    
    static contextTypes = {
        a:PropTypes.number,
        change:PropTypes.func
    }


    static childContextTypes = {
        a:PropTypes.number
    }

    getChildContext(){
        return {
            a:456
        }
    }

    constructor(props,context){
        super(props,context)
        console.log(this.context);
    }

    render(){
        return(
            <>
                <B/>
                <div>A组件:{this.context.a}</div>
                <button onClick={()=>{this.context.change(this.context.a + 2)}}>child a+2</button>
            </>
        )
    }
}



export default class OldContext extends Component {
    // 静态属性 约束上下文中的状态
    static childContextTypes = {
        a:PropTypes.number,
        b:PropTypes.string.isRequired,
        change:PropTypes.func
    }

    state = {
        a:123,
        b:'asd'
    }


    /**
     * 得到上下文中的数据自动调用，必须满足类型约束
     * render 后调用
     */
    getChildContext(){
        // console.log('获得上下文中的数据');
        return {
            a:this.state.a,
            b:this.state.b,
            change:(newValue)=>{
                this.setState({
                    a:newValue
                })
            }
        }
    }

    // constructor(props,context){
    //     super(props,context)
    //     // 本组件获取不到
    //     // console.log(this.context);
    // }
    
    render() {
        return (
            <div>
                <A/>
                <button onClick={
                    ()=>{
                        this.setState({
                            a:this.state.a + 1
                        })
                    }
                }>a+1</button>
            </div>
        )
    }
}
