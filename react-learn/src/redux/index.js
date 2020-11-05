
// 帮助创建数据仓库
import {createStore,bindActionCreators,applyMiddleware} from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'



const store = createStore(reducer,applyMiddleware(thunk.withExtraArgument(111),logger))
                                                // logger一般认识对象，
                                                // 而action可能是一个函数
                                                // 所以 logger要放在最后面

export default store


//等价于
// boundActions.getIncreaseAction()    //调用，并直接dispatch
