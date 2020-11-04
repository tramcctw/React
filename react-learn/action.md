# Action
1. action 是一个plain-object(平面对象)
    1. 它的__proto__必须指向Object.prototype
    2. 通常使用payload属性作为附加属性
2. action中必须有type属性，该属性用于描述操作的类型
    1. 但没有对type的类型做出要求
3. 在大型项目中，由于操作类型非常多，为了避免硬编码，会将action的类型单独编写一个文件(样板代码)
4. 为了方便传递action,通常会使用action创建函数，来创建action 自己封装的函数用于返回action对象
    1. action创建函数应为无副作用的纯函数
        1. 不能以任何形式改动参数
        2. 不可以异步 
        3. 不可以对外部环境中的数据造成影响

5. 为了方便利用action创建函数来分发(触发)action，redux提供了一个函数
```bindActionCreators``` 使其获得action并同时分发