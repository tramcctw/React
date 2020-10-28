# React 中的事件

这里的事件：React 内置的 DOM 组件中的事件

1. 给 document 注册事件
2. 几乎所有的元素的事件处理，均在 document 的事件中处理
   1. 一些不冒泡的事件，是直接在元素上监听
   2. 一些document上没有的事件，直接在元素上监听
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
5. 在事件处理程序中，不要异步的处理事件对象（因为react会重用合成的事件对象，当事件对象使用后，会清空内部的值，所以异步再次使用，得到的是null）(可以使用e.persist()持久保存e，但是效率低)
