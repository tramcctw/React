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
    - React 文本节点：由字符串，数字创建的
    - React 空节点：由 null undefined false true（不会生成 dom 元素）
    - React 数组节点：该节点由一个数组创建
  - 真实 DOM:通过 document.createElement 创建的 dom 元素

  ## 首次渲染(新节点渲染)

  1. 通过参数的值创建节点
  2. 根据不同的节点，做不同的事情
     1. 文本节点：通过 document.createTextNode 创建真实的文本节点(真实的 DOM)
     2. 空节点：什么都不做
     3. 数组节点：遍历数组，将数组每一项递归创建节点（回到第一步进行反复操作，直到遍历结束）
     4. DOM 节点：通过 document.createElement 创建真实的 DOM 对象，然后立即设置该真实 DOM 元素的各种属性,然后遍历对应 React 元素的 children 属性，递归操作（回到第一步进行反复操作，直到遍历结束）
     5. 组件节点
        1. 函数组件：调用函数(该函数必须返回一个可以生成节点的内容)，将该函数的返回结果递归生成节点
        2. 类组件：
           1. 创建该类的实例
           2. 立即调用对象的生命周期方法
           3. 运行该对象的 render 方法，拿到节点对象（将该节点递归操作，回到第一步进行反复操作，直到遍历结束）
  3. 生成出虚拟 DOM 树之后，将该树保存起来，以便后续使用
  4. 将之前生成的真实 DOM 对象，加入到容器中

react 元素

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
![](assets/2019-07-25-14-17-04.png)

函数组件

```js
function Comp1(props) {
  return <h1>Comp1 {props.n}</h1>;
}

function App(props) {
  return (
    <div>
      <Comp1 n={5} />
    </div>
  );
}

const app = <App />;
ReactDOM.render(app, document.getElementById("root"));
```

以上代码生成虚拟 DOM 树
![](assets/2019-07-25-14-49-53.png)

类组件

```js
class Comp1 extends React.Component {
  render() {
    return <h1>Comp1</h1>;
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <Comp1 />
      </div>
    );
  }
}
const app = <App />;
ReactDOM.render(app, document.getElementById("root"));
```

以上代码生成虚拟 DOM 树
![](assets/2019-07-25-14-56-35.png)
