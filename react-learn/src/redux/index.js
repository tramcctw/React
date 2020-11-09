
// 帮助创建数据仓库
import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import createSagaMiddleware  from 'redux-saga';
import sagaRoot from './saga'
const sagaMid = createSagaMiddleware() // 创建一个saga中间件



const store = createStore(reducer,applyMiddleware(sagaMid,logger))
                                                // logger一般认识对象，
                                                // 而action可能是一个函数
                                                // 所以 logger要放在最后面

sagaMid.run(sagaRoot)   //启动saga任务

export default store


//等价于
// boundActions.getIncreaseAction()    //调用，并直接dispatch
