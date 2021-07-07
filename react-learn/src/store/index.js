// 用于创建仓库，并导出
import createStore  from '../redux/createStore'
import applyMiddleware from '../redux/applyMiddleware'
import createSagaMiddleware from "../redux-saga/createSagaMiddleware"
import reducer from "./reducer"
import rootSaga from "./saga"

const sagaMid = createSagaMiddleware(); //创建一个saga的中间件
// 这里返回一个中间件

const logger = store => next => action => {
    console.log('状态改变前',store.getState())
    next(action)
    console.log('状态改变后',store.getState())
}

const store = createStore(reducer,
    applyMiddleware(sagaMid,logger)
)

sagaMid.run(rootSaga); //启动saga任务

export default store;