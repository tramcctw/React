# HOC高阶组件

HOF：Heigher-Order Function  高阶函数，以函数为参数，返回一个函数
HOC: Heigher-Order Component 高阶组件，以组件作为参数，并返回一个组件

- class A{}  function A(){}       // 组件
- <A/>  react component elment    // 组件的实例
- <h1/> react html element


通常可以利用HOC实现横切关注点。
- HOC一般不做与显示相关的功能

**注意**
1. 不要在render中使用高阶组件，因为setState时，会重新运行render，因此里面的组件会重新创建浪费效率。
2. 不要在高阶组件里更改传入的组件。


