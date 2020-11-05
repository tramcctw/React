# 利用中间件进行副作用处理

- redux-thunk

thunk 允许 action 是一个带有副作用的函数，当 action 是一个函数被分发时,thunk 会阻止 action 继续向后分发，并运行函数，否则向后分发

thunk 会向函数中传递三个参数

- dispatch:来自于 store.dispatch
- getState:来自于 store.getState
- extra:来自于用户设置的额外参数

- redux-promise

## 迭代

类似于遍历
遍历：由多个数据组成的集合数据结构，需要从中依次取出数据进行某种处理

迭代：按照某种逻辑，依次取出下一个数据进行处理

## 迭代器

js 语言规定，如果一个对象具有 next 方法，并且 next 方法满足一定的约束，该对象就是一个迭代器(iterator)

next 方法的约束，该方法必须返回一个对象，该对象至少有两个属性

- value: any 类型 下一个数据的值 done 为 true 通常设置 value 为 undefined
- done: bool 类型 是否已经迭代完成

通过迭代器的 next 方法，可以依次取出数据，并可以根据返回的 done 属性，判断是否迭代结束

- redux-saga
