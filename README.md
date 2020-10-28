# Portals

插槽：将一个 React 元素渲染到指定的 DOM 容器中

ReactDOM.createPortal(React 元素，真实的 DOM 容器)该函数返回一个 React 元素
**注意事件冒泡**

1. React 中的事件是包装过的
2. 它的事件冒泡是根据虚拟 DOM 树来冒泡，与真实的 DOM 树无关
