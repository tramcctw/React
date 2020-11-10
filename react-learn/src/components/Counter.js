import React from 'react'
import {connect} from 'react-redux'
import {increase,decrease,asyncDecrease,asyncIncrease} from '../redux/action/counter'
import {bindActionCreators} from 'redux'

function Counter(props) {
    return (
        <div>
            <h2>{props.counter}</h2>
            <button onClick={()=>{props.increase()}}>加</button>
            <button onClick={()=>{props.decrease()}}>减</button>
            <button onClick={()=>{props.asyncDecrease()}}>异步减</button>
            <button onClick={()=>{props.asyncIncrease()}}>异步加</button>
        </div>
    )
}

function mapStateToProps(state,ownProps){ // connect 自动传入store.getState()
    return {
        counter:state.counter
    }
}

function mapDispatchToProps(dispatch){  // connect 自动传入store.dispatch
    return {
        increase(){
            dispatch(increase())
        },
        decrease(){
            dispatch(decrease())
        },
        asyncIncrease(){
            dispatch(asyncIncrease())
        },
        asyncDecrease(){
            dispatch(asyncDecrease())
        }
    }
}

// function mapDispatchToProps(dispatch){  // connect 自动传入store.dispatch
//     const obj = bindActionCreators({
//         increase,  // 调用函数直接分发
//         decrease,
//         asyncIncrease,
//         asyncDecrease
//     },dispatch)

//     console.log(obj)
//     return obj
// }


// const creator = {
//     increase,  
//     decrease,
//     asyncIncrease,
//     asyncDecrease
// }


//  class CounterContainer extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = mapStateToProps(store.getState())
//     }

//     render(){
//         const events = mapDispatchToProps(store.dispatch)
//         store.subscribe(()=>{
//             this.setState(
//                 mapStateToProps(store.getState())
//             )
//         })
//         return (
//             <Counter {...this.state} {...events}/>
//         )
//     }
// }

 // connect返回的高阶组件帮助完成CounterContainer效果
// export default connect(mapStateToProps,mapDispatchToProps)(Counter)
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
