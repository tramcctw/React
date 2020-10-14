import React, { Component } from 'react'
// import FuncDefault from './components/FuncDefault'
// import ClassDefault from './components/ClassDefault'
import ValidationComp,{A,B} from './ValidationComp'
import Comp from './components/Comp'

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <FuncDefault/> */}
                {/* <ClassDefault/> */}
                <ValidationComp a={1} 
                d={undefined}
                e={  <p>hello</p> }
                F={Comp}    //这里传递的是构造函数
                g={new B()}  
                h='male' 
                i={{
                    name:'hello',
                    age:11,
                    address:{
                        province:'shanghai'
                    }
                }}
                n = {12}
                />
            </div>
        )
    }
}
