import React, { Component } from 'react'

// 创建一个上下文,返回一个对象
const ctx = React.createContext()


function B(props){
    return (
        <div>
            <ctx.Consumer>
                {context=>{
                    return console.log(context);
                }}
            </ctx.Consumer>
            <h2>我是B组件</h2>
        </div>
    )
}


class A extends Component {

    static contextType = ctx;

    render() {
        return (
            <div>
                <B/>
                A组件a：{this.context.a},
                A组件b：{this.context.b}
                <button onClick={()=>{
                    this.context.changeA(this.context.a + 2)
                }}>A组件的按钮</button>
            </div>
        )
    }
}


export default class NewContext extends Component {
    state = {
        a:0,
        b:'asd',
        changeA:(newValue)=>{
            this.setState({
                a:newValue
            })
        }
    }

    render() {
        const Provider = ctx.Provider
        return (
            // 这个Provider组件会创建上下文
            // 改变状态，重新渲染，重新给value赋值
            // 向它的子组件提供上下文
            <Provider value={this.state}>
                <div>
                    <A/>
                    <button onClick={()=>{
                        this.setState({
                            a:this.state.a + 1
                        })
                    }}>a+1</button>
                </div>
            </Provider>
        
        )
    }
}
