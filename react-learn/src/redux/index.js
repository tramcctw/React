
// 帮助创建数据仓库
import {createStore,bindActionCreators,applyMiddleware} from 'redux'
import * as loginUser from './action/loginUserAction'
import * as users from './action/usersAction'
import reducer from './reducer'

const logger1 = store=>next=>action=>{
    console.log('中间件1',action)
    next(action)   
}


// function logger1(store){

//     return function(next){  //  下一个-中间件的dispatch，从后往前增强
//         return function(action){    // 返回一个dispatch函数，是在下一个dispatch中增强后的dispatch
//             console.log('中间件1',action)
//             next(action)                        // 调用下一个dispatch
//         }
//     }
// }


const arr = []
function logger2(store){    // store.dispatch 最终的dispatch
    return function(next){  //  下一个-中间件的dispatch，从后往前增强
        return function(action){    // 返回一个dispatch函数，是在下一个dispatch中增强后的dispatch
            arr.push(store.dispatch)
            console.log('中间件2',action)
            next(action)           //没有下一个，则调用原始的dispatch
        }
    }
}

//创建仓库的方式1
// const store = createStore(reducer,applyMiddleware(logger1,logger2))      // 此时会调用reducer
//创建一个仓库,第一位表示是处理器,第二位表示初始状态值

// 方式2 
const store = applyMiddleware(logger1,logger2)(createStore)(reducer)


// const action = {
//     type:actionType.INCREASE
// }
//第一个参数，是action创建函数合并的对象，第二个参数是仓库的dispatch函数
//得到一个新对象，新对象中的属性名与第一个参数的属性名一致
// const boundActions = bindActionCreators(numberActions,store.dispatch)

console.log(store.dispatch)
console.log(store.dispatch === arr[0])  // false

// const unListen =  store.subscribe(()=>{
//     console.log('状态变化');
//     console.log(store.getState());
// })


// store.subscribe(()=>{
//     console.log('状态变化2');
// })
// 注册监听器，当分发action后会依次运行


// store.dispatch(loginUser.setLoginUser({
//         id:3,
//         name:'zhangsan',
//         age:10
// }))

// unListen()
// 取消监听


store.dispatch(users.addUser({
    id:3,
    name:'张三',
    age:10
}))

store.dispatch(users.addUser({
    id:3,
    name:'lisi',
    age:10
}))

console.log(store.getState());

// store.dispatch(users.deleteUser(3))

// store.dispatch(users.updateUser(1,{
//     id:100,
//     name:'twc'
// }))


//等价于
// boundActions.getIncreaseAction()    //调用，并直接dispatch
