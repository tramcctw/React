# React 中的事件

这里的事件：React 内置的 DOM 组件中的事件

1. 给 document 注册事件
2. 几乎所有的元素的事件处理，均在 document 的事件中处理
3. 在 document 的事件处理，React 会根据虚拟 DOM 树完成事件函数的调用
4. React 的事件参数，并非真实的 DOM 事件参数，是 React 合成的一个对象，该对象类似于真实 DOM 的事件参数

   1. stopPropagation,阻止事件在虚拟 DOM 树中的冒泡
   2. nativeEvent 获得真实的 e
   3. 为了提高执行效率，React 使用事件对象池来处理事件对象

**注意事项**

1. 如果给真实的 DOM 注册事件，阻止了事件冒泡，则会导致 react 的相应事件无法触发
2. 如果给真实的 DOM 注册事件，事件会先于 React 事件运行
3. 通过 React 的事件中阻止事件冒泡，无法阻止真实的 DOM 事件冒泡
4. 可以通过 nativeEvent.stopImmediatePropagation(),阻止 document 上剩余的事件执行
