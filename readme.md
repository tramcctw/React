# 利用中间件进行副作用处理

- redux-thunk

thunk 允许action是一个带有副作用的函数，当action是一个函数被分发时,thunk会阻止action继续向后分发，并运行函数，否则向后分发

thunk会向函数中传递三个参数
- dispatch:来自于store.dispatch
- getState:来自于store.getState
- extra:来自于用户设置的额外参数

- redux-promise
- redux-saga
