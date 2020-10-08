# Reducer
Reducer 用于改变数据的函数

1. 一个数据仓库只有一个Reducer函数,通常下一个工程只有一个仓库
2. 为了方便管理，通常reducer会单独放在一个文件中
3. reducer被调用的时机
    1. 通过store.dispatch,分发了一个action,此时会调用reducer
    2. 当创建一个store的时候，会调用一次reducer
        1. 可以利用这一点，用reducer初始化状态
        2. 创建仓库时，不传递任何默认状态
        3. 将reducer的参数state设置一个默认值
4. reducer 通常会使用一个switch来判断type值
5. **reducer必须是一个没有副作用的纯函数**