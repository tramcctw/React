# 属性默认值 和 类型检查

## 属性默认值

通过一个静态属性```defaultProps```告知react属性默认值,
在调用组件时，会将defaultProps和props做一个混合

## 属性类型检查
使用库：```prop-types```
对组件使用静态属性```propTypes```告知react如何检查属性
**先混合，再进行类型检查**
