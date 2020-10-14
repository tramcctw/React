# 属性默认值 和 类型检查

## 属性默认值

通过一个静态属性```defaultProps```告知react属性默认值,
在调用组件时，会将defaultProps和props做一个混合

## 属性类型检查
使用库：```prop-types```
对组件使用静态属性```propTypes```告知react如何检查属性
**先混合，再进行类型检查**

PropTypes.node.isRequired //必填，可以是被渲染的内容包括数字，字符串,react 元素，传入null undefined等于没有传递
PropTypes.element  //react 元素

- 传递的属性限制
```js
static propTypes = {
    a:PropTypes.number.isRequired, // 必须是一个数字，且必填
    b:PropTypes.bool.isRequired, // 必须是一个布尔，且必填
    onclick:PropTypes.func,     //  必须是一个函数
    c:PropTypes.any,            // 1.可以设置必填，2.可以告知可以传递的属性
    d:PropTypes.node.isRequired, //必填，可以是被渲染的内容包括数字，字符串,react 元素，传入null undefined等于没有传递
    e:PropTypes.element,  //数字字符都不行必须是react元素
    F:PropTypes.elementType, //传递的是一个组件类型，即构造函数名字
    g:PropTypes.instanceOf(A), // g必须是A的实例
    h:PropTypes.oneOf(['male','female']).isRequired, //必须传其一
    i:PropTypes.shape({
        name:PropTypes.string.isRequired,  //name属性必须是字符串
        age:PropTypes.number,   // age属性必须是数字
        // 可以多添加属性
        address:PropTypes.shape({
            province:PropTypes.string.isRequired
        }).isRequired
    }),
    j:PropTypes.arrayOf(PropTypes.number),      //传入的数据是数组，且每一项必须是数字
    k:PropTypes.objectOf(PropTypes.number),     // 对象属性值都必须是数字
    L:PropTypes.arrayOf(PropTypes.shape({
        name:PropTypes.string.isRequired,
        age:PropTypes.number.isRequired
    })),
    m:PropTypes.exact({}),   //和shape一样，但是属性必须精确传递       
    n:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),   // 属性类型必须其中的一个
    o:function (props,propName,componentName) {
        // props 传递过来的所有的属性
        // propName 该属性的名称
        // componentName 本组件的名称
    }
}
```