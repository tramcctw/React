# Portals

插槽：将一个 React 元素渲染到指定的 DOM 容器中

ReactDOM.createPortal(React 元素，真实的 DOM 容器)该函数返回一个 React 元素
**注意事件冒泡**

1. React 中的事件是包装过的
2. 它的事件冒泡是根据虚拟 DOM 树来冒泡，与真实的 DOM 树无关

# 错误边界

默认情况下，若一个组件在**渲染期间**（render）发生错误，会一层一层的向上传递错误,会导致整个组件树全部被卸载, **注意非渲染期间不会一层一层传递**
错误边界：是一个组件，该组件会捕获到渲染期间（render）子组件发生的错误，并有能力阻止错误继续传播

**让某个组件捕获错误**

1. 编写生命周期函数 getDerivedStateFromError(err)
   1. 静态函数
   2. 运行时间点： 渲染子组件的过程中，发生错误之后，在更新页面之前
   3. **注意：只有子组件发生错误，才会运行该函数，自己发生错误不会运行该函数**
   4. 该函数返回一个对象，React 会将该对象的属性覆盖掉当前组件的 state
   5. 参数：错误对象
   6. 通常，该函数用于改变状态
2. 编写生命周期函数 componentDidCatch(err,info)
   1. 实例方法
   2. 运行时间点:渲染子组件的过程中，发生错误之后,在更新页面之后,由于运行时间比较靠后，因此不太会在该函数中改变状态
   3. 通常，该函数用于记录错误消息

**细节**
某些错误，错误边界组件无法捕获

1. 自身的错误
2. 异步的错误
3. 事件中的错误
