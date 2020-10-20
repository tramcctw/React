# redux 和 react 结合

# react-redux

> 如果一个组件，仅用于渲染一个 ui 界面，而没有状态，该组件叫做**展示组件**
> 如果一个组件，仅用于提供数据，没有任何属于自己的 ui 界面，则该组件叫做**容器组件**，纯粹是为了提供给其组件数据

## react-redux:链接 redux 和 react

- Provider 组件：没有任何 ui 界面，该组件的作用，是将 redux 的仓库放到一个上下文中

- connect: connect 函数返回一个高阶组件(展示的容器组件)，用于链接仓库和组件，第一个参数映射的属性，第二个参数，事件处理函数
- 细节一：如果对返回的容器组件加上额外的属性，则这些属性会直接传递给展示组件

## connect 传递参数

参数 1 传递 mapStateToProps 或者 null

mapStateToProps 属性：

1. 参数一，整个仓库的状态
2. 参数二，使用者传递的属性对象//容器组件加上额外的属性

参数 2 传递 mapDispatchToProps （或者传递一个对象，每个属性都是一个 action 创建函数，当事件触发会自动 dispatch 函数返回的 action）

mapDispatchToProps 属性：

1. 第一个参数 dispatch
2. 第二个参数 使用者传递的属性对象
   返回值展开会作为展示组件的 props 属性传入

小细节：connect 第二个参数不传递，则 dispath 自动传递到展示组件的 props 中，可以自行 dispatch，但是不推荐这样做，耦合度增加
