
// 帮助创建数据仓库
import {createStore,bindActionCreators} from 'redux'
import reducer from './reducer'
import * as numberActions from './action/number-action'

 

const store = createStore(reducer)
//创建一个仓库,第一位表示是处理器,第二位表示初始状态值

// const action = {
//     type:actionType.INCREASE
// }
//第一个参数，是action创建函数合并的对象，第二个参数是仓库的dispatch函数
//得到一个新对象，新对象中的属性名与第一个参数的属性名一致
const boundActions = bindActionCreators(numberActions,store.dispatch)

console.log(store.getState());

store.dispatch(numberActions.getIncreaseAction()) //向仓库分发action
//等价于
boundActions.getIncreaseAction()    //调用，并直接dispatch

console.log(store.getState());

store.dispatch(numberActions.getSetAction(3))
console.log(store.getState());