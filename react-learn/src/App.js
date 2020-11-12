import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/index'
import Counter from './components/Counter'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import Test from './components/Test'
import history from './redux/history'
import C from './components/C'
import Jump from './components/Jump'

export default function App() {
    return (
        //将仓库放到上下文中
        <>
            <Provider store={store}>
                {/* 需要维护该组件的history对象 */}
                <ConnectedRouter history={history}>  
                    {/* abc会直接转发到容器组件中去 */}
                    {/* <Counter abc={123} twc={456}/> */}
                    <Route path='/' exact component={Counter}></Route>
                    <Route path='/a' exact component={Test}></Route>
                    <Route path='/c' exact component={C}></Route>
                </ConnectedRouter>
                <Jump/>
            </Provider>
        </>
    )
}
