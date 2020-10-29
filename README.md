# 渲染原理

渲染：生成用于显示的对象，以及将这些对象形成真实的 DOM 对象
React 元素-> 节点 -> UI

- React 元素：React Element,通过 React.createElement 创建（语法糖 jsx）
- 例如

  ```js
  <div></div>;
  React.createElement(App, null, null);
  ```

- React 节点：专门用于渲染到 UI 界面到对象，React 会通过 React 元素，创建 React 节点
  ReactDOM 一定是通过 React 节点来进行渲染的

  - 节点类型：
    - React DOM 节点：创建该节点的 React 元素类型是一个字符串
    - React 组件节点：创建该节点的 React 元素类型是一个函数或者一个类
    - React 文本节点：由字符串创建的
    - React 空节点：由 null undefined false（不会生成 dom 元素）
    - React 数组节点：该节点由一个数组创建
  - 真实 DOM:通过 document.createElement 创建的 dom 元素

  ## 首次渲染(新节点渲染)

  1. 通过参数的值创建节点
  2. 根据不同的节点，做不同的事情
     1. 文本节点：通过 document.createTextNode 创建真实的文本节点(真实的 DOM)
     2. 空节点：什么都不做
     3. 数组节点：遍历数组，将数组每一项递归创建节点（回到第一步进行反复操作，直到遍历结束）
     4. DOM 节点：通过 document.createElement 创建真实的 DOM 对象，然后立即设置该真实 DOM 元素的各种属性,然后遍历对应 React 元素的 children 属性，递归操作（回到第一步进行反复操作，直到遍历结束）
  3. 生成出虚拟 DOM 树之后，将该树保存起来，以便后续使用
  4. 将之前生成的真实 DOM 对象，加入到容器中

```js
const app = (
  <div>
    <h1>
      标题
      {["abc", null, <p>段落</p>]}
    </h1>
    <p>{undefined}</p>
  </div>
);
```

以上代码生成虚拟 DOM 树
