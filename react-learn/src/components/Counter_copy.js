import React from 'react'
import {connect} from 'react-redux'
import store from '../redux/index'
import {increase,decrease,asyncDecrease,asyncIncrease} from '../redux/action/counter'

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

function mapStateToProps(state){
    return state
}

function mapDispatchToProps(dispatch){
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

export default class CounterContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter:mapStateToProps(store.getState().counter),
        }
    }

    render(){
        const events = mapDispatchToProps(store.dispatch)
        store.subscribe(()=>{
            this.setState({
                counter:mapStateToProps(store.getState().counter)
            })
        })
        return (
            <Counter {...this.state} {...events}/>
        )
    }
}
