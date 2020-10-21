import React, { Component } from 'react'

// 创建一个上下文,返回一个对象
const ctx1 = React.createContext()
const ctx2 = React.createContext()

function B(props){
    return (
        <div>
            <ctx1.Consumer>
                {context=>{
                    return console.log(context);
                }}
            </ctx1.Consumer>
            <h2>我是B组件</h2>
            <ctx2.Consumer>
                {val=>(
                    <>
                        <h1>我是B组件ctx2</h1>
                        <h2>name:{val.name}</h2>
                        <h2>age:{val.age}</h2>
                        <h1>我是B组件ctx2</h1>
                    </>
                )}
            </ctx2.Consumer>
        </div>
    )
}


class A extends Component {


    shouldComponentUpdate(pre,next){
        console.log('性能优化');
        return false
    }

    render() {
        return (
            <ctx2.Provider value={{
                name:'twc',
                age:111
            }}>
                <ctx1.Consumer>
                    {value=>(
                        <div>
                            <B/>
                            A组件a：{value.a},
                            A组件b：{value.b}
                            <button onClick={()=>{
                                value.changeA(value.a + 2)
                            }}>A组件的按钮</button>
                        </div>
                    )}
                </ctx1.Consumer>
            </ctx2.Provider>
        )
    }
}


export default class NewContext extends Component {
    state = {
        ctx:{
            a:0,
            b:'asd',
            changeA:(newValue)=>{
                this.setState({
                    a:newValue
                })
            }
        }
    }

    render() {
        return (
            <ctx1.Provider value={this.state.ctx}>
                <div>
                    <A/>
                    <button onClick={()=>{
                        this.setState({})
                        //此时更新的是state的地址，而它的属性并没有发生变化
                        //这样就不会导致后代属性全部刷新，即不会绕过shouldComponentUpdate
                    }}>a+1</button>
                </div>
            </ctx1.Provider>
        
        )
    }
}
