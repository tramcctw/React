
// 帮助创建数据仓库
import {createStore,bindActionCreators} from 'redux'
import * as loginUser from './action/loginUserAction'
import * as users from './action/usersAction'
import reducer from './reducer'


const store = createStore(reducer)      // 此时会调用reducer
//创建一个仓库,第一位表示是处理器,第二位表示初始状态值

// const action = {
//     type:actionType.INCREASE
// }
//第一个参数，是action创建函数合并的对象，第二个参数是仓库的dispatch函数
//得到一个新对象，新对象中的属性名与第一个参数的属性名一致
// const boundActions = bindActionCreators(numberActions,store.dispatch)


const unListen =  store.subscribe(()=>{
    console.log('状态变化');
    console.log(store.getState());
})


store.subscribe(()=>{
    console.log('状态变化2');
})
// 注册监听器，当分发action后会依次运行


store.dispatch(loginUser.setLoginUser({
        id:3,
        name:'zhangsan',
        age:10
}))

unListen()
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


store.dispatch(users.deleteUser(3))

store.dispatch(users.updateUser(1,{
    id:100,
    name:'twc'
}))


//等价于
// boundActions.getIncreaseAction()    //调用，并直接dispatch
