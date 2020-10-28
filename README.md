# render props

有时候，某些组件的各种功能及其处理逻辑几乎完全相同，只是显示的界面不同

1. render props
   - 传递函数，子组件通过 children() 传回需要的参数
   - 注意纯组件的属性(尽量避免每次传递的 render props 的地址不一致)
   - 通常该属性的名字叫做 render
2. HOC
