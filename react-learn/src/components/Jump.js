import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
// push这里会返回一个action对象而不是调用push
// 可以使用history.push跳转也可以

function Jump({go,goA,goC}) {
    return (
        <div>
            <button onClick={()=>{
                goA()
            }}>/a</button>
            <button onClick={()=>{
                go()
            }}>/</button>
            <button onClick={()=>{
                goC()
            }}>/c</button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        goA(){
            dispatch(push('/a'))
        },
        go(){
            dispatch(push('/'))
        },
        goC(){
            dispatch(push('/c'))
        }
    }
}

export default connect(null,mapDispatchToProps)(Jump)
