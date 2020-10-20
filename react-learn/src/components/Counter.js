import React,{useEffct} from 'react'
import { Component } from 'react'
import {connect} from 'react-redux'

function Counter(props){
    return (
        <div>
            <h1>{props.number}</h1>
            <p>
                <button onClick={props.onAsyncDecrease}>异步减</button>
                <button onClick={props.onDecrease}> 减</button>
                <button onClick={props.onIncrease}>加</button>
                <button onClick={props.onAsyncIncrease}>异步加</button>
            </p>
        </div>
    )
}


// function mapDispatchToProps(dispatch){
//     return {
//         onIncrease(){
//             dispatch(increase()) //   给它一个action，改变仓库数据
//         },
//         onDecrease(){
//             dispatch(decrease()) //   给它一个action，改变仓库数据
//         },
//         onAsyncDecrease(){
//             dispatch(asyncDecrease()) //   给它一个action，改变仓库数据
//         },
//         onAsyncIncrease(){
//             dispatch(asyncIncrease) //   给它一个action，改变仓库数据
//         }
//     }
// }

const creators = {
    onIncrease:increase,
    onDecrease:decrease, 
    onAsyncDecrease:asyncDecrease,
    onAsyncIncrease:asyncIncrease 
}
function mapStateToProps(state){
    return {
        number:state.counter
    }
}


// export class CounterWrapper extends Component(){
//     constructor(props){
//         super(props)
//         this.state = mapStateToProps(store.getState())
//         this.events = mapDispatchToProps(store.dispatch)
//         store.subScribe(()=>{
//             this.setState(store.getState())
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <Counter {...this.state} {...this.events}/>
//             </div>
//         )
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
export default connect(mapStateToProps,creators)(Counter);
