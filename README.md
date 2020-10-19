# ref

reference:引用
场景：希望直接使用dom元素中的某个方法 ，或者希望直接使用自定义组件中的某个方法
1. ref作用于内置的html组件，得到的将是真实的dom对象
2. ref作用于类组件，得到的将是类的实例
3. ref不能作用于函数组件，函数内部的dom上可以写ref

ref不再推荐使用字符串赋值，

目前，ref推荐使用对象或者函数

**对象**
通过React.createRef 函数创建在构造函数中比如赋值给this.txt
在dom元素中或者组件中ref = {this.txt}       通过this.txt.current拿到相应的结果


**函数**
函数被调用的时间
1. componentDidMount时会调用这个函数
    1.在componentDidMount事件中可以使用ref

2. 如果ref的值发生了变动(render刷新)(旧的函数被新的函数替代)，分别调用旧的函数和新的函数，时间出现在componentDidUpdate之前
    1. 旧的传递null
    2. 新的传递正常的el

如果函数写在外面即不会刷新函数，所以不会调用两次

3. 如果ref所在的组件被卸载会调用函数

**谨慎使用ref**

1. 真实dom方法需要调用
2. 某个类组件中的方法需要调用
希望使用数据驱动



# ref转发

forwardRef方法 
1. 参数，传递的是函数组件
2. 返回值，返回一个新的组件

