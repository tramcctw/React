# Store
Stroe：用于保存数据
通过createStore创建对象
该对象的成员
- dispatch:分发一个action
- getState:得到仓库当前的状态
- replaceReducer:替换掉当前的reducer
- subscribe: 注册一个监听器，监听器是一个无参函数，当分发一个action之后，会运行注册的监听器，该函数会返回一个函数可以取消监听。
