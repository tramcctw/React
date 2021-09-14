# path-to-regexp

**创建一个match对象**

第三方库：path-to-regexp，用于将一个字符串正则（路径正则，path regexp）

# history对象

该对象提供了一些方法，用于控制或监听地址的变化。

该对象**不是**window.history，而是一个抽离的对象，它提供统一的API接口，封装了具体的实现

- createBrowserHistory  产生的控制浏览器真实地址的history对象
- createHashHistory  产生的控制浏览器hash的history对象
- createMemoryHistory  产生的控制内存中地址数组的history对象   移动端

history对象共同的特点：维护了一个地址栈

第三方库：history

**以下三个函数，虽然名称和参数不同，但返回的对象结构(history)完全一致**

## history对象

- action：当前地址栈，最后一次操作的类型
  - 如果是通过createXXXHistory函数新创建的history对象，action固定为POP
  - 如果调用了history的push方法，action变为PUSH
  - 如果调用了history的replace方法，action变为REPLACE
- push：向当前地址栈指针位置，入栈一个地址. 可以传递一个对象 {pathname:'',search:'',hash:'',}
- replace：替换指针指向的地址
- go：控制当前地址栈指针偏移，如果是0，地址不变；如果是负数，则后退指定的步数；如果是正数，则前进指定的步数；action不变
- length：当前栈中的地址数量
- goBack：相当于go(-1)
- goForward：相当于go(1)
- location：表达当前地址中的信息
- listen：函数，用于监听地址栈指针的变化。  用于渲染界面的关键 跳转之后触发
  - 该函数接收一个函数作为参数，该参数表示地址变化后要做的事情
    - 参数函数接收两个参数
    - location：记录了新的地址
    - action：进入新地址的方式
      - POP：指针移动，调用go、goBack、goForward、用户点击浏览器后退按钮    
      - PUSH：调用history.push
      - REPLACE：调用history.replace
  - 该函数有一个返回值，返回的是一个函数，用于取消监听
- block：用于设置一个阻塞，当页面发生跳转时，会将指定的消息传递到getUserConfirmation，并调用getUserConfirmation函数。跳转之前
  - 该函数接收一个字符串作为参数，表示消息内容，也可以接收一个函数作为参数，函数的返回值是消息内容（loaction,action）=> msg
  - 该函数返回一个取消函数，调用取消函数可以解除阻塞
- createHref：basename+url (location) => 一个完整的路径

## createBrowserHistory

创建一个使用浏览器History Api的history对象

配置对象：

- basename：设置根路径。 跳转后自动加上根路径
- forceRefresh：地址改变时是否强制刷新页面
- keyLength：location对象使用的key值长度。默认是6。location key属性的长度。
  - 地址栈中记录的并非字符串，而是一个location对象，所以可能有几个location长的一样，需要用独一无二的key值进行区分
- getUserConfirmation：一个函数，该函数当调用history对象block函数后，发生页面跳转时运行。
  - 参数一。 msg   block 传递的msg
  - 参数二。 callback。 决定是否跳转， callback(true) 表示跳转 false 表示不跳转

## createHashHistory

创建一个使用浏览器hash的history对象

配置对象：

- hashType：#号后给定的路径格式
  - hashbang：被chrome弃用，#!路径
  - noslash：#a/b/c
  - slash：#/a/b/c。默认

## createMemoryHistory。

创建一个使用内存中的地址栈的history对象，一般用于没有地址栏的环境。移动端。不再维护地址栏。即地址栏不变

配置对象：详见memoryHistory.js