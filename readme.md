# react-redux


>如果一个组件，仅用于渲染一个UI界面，而没有状态（通常是一个函数组件），该组件叫做**展示组件**
>如果一个组件，仅用于提供数据，没有任何属于自己的ui界面，则该组件叫做**容器组件**容器组件纯粹是为了给其他组件提供数据。

react-redux库：链接redux和react
- Provider组件：没有任何UI界面，该组件的作用是将redux的仓库放到一个上下文中。
- connect:高阶组件，用于链接仓库和组件的

- 细节一：如果对返回的容器组件加上额外的属性，则这些属性会直接传递到展示组件
connect的参数一
- mapStateToProps:
    - 参数一：整个仓库的状态
    - 参数二：使用者传递的属性对象
    - 函数返回的对象被展开会传递到展示组件里面去
connect的参数二
- mapDispatchToPorps:
    - 参数一：dispatch函数
    - 参数二: 使用者传递的属性对象
    - 函数返回的对象被展开会传递到展示组件里面去
- 传递的是一个对象：对象的每个属性是一个action创建函数，当事件触发时，会自动dispatc函数返回的action

- 细节二
- 如果参数二不传递属性，counter的props自动得到属性dispatch，可以使组件自己dispatch，但是耦合度太高
    