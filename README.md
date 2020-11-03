# React Router 的概述

无论是应用 vue，还是 react，开发的单页应用程序，可能只是该站点的一部分（某个一个功能块）

一个单页面应用里，可能会划分为多个页面（几乎完全不同的页面效果）（组件）
如果要在单页面应用中完成组件的切换，需要实现下面两个功能

1. 根据不同的页面地址，展示不同的组件
2. 完成无刷新的跳转

我们把实现了以上两个功能的插件，称之为路由

## React Router

1. react-router:路由核心库，包含诸多和路由功能相关的核心代码
2. react-router-dom: 利用路由核心库，结合实际的页面，实现跟页面路由密切相关的功能

如果是在页面中实现路由，需要安装 react-router-dom 库

# 两种模式

## Hash Router 哈希路由

根据 url 地址中的哈希值来确定显示的组件
兼容性最好

## history Router

html5，新增 history api

1. history.pushState 向栈中加入一条新记录
   参数 1： 附加数据，自定义数据，可以是任何类型
   参数 2: 页面标题，目前大部分浏览器不支持
   参数 3: 新的地址
2. history.replaceState 替换栈顶纪录
   参数 1： 附加数据，自定义数据，可以是任何类型
   参数 2: 页面标题，目前大部分浏览器不支持
   参数 3: 新的地址

根据页面的路径来渲染哪个组件

# 路由组件

React-Router 为我们提供了两个重要的组件

## Router 组件

它本身不做任何展示，仅提供路由模式配置，另外该组件产生一个上下文，上下文中会提供一些实用的对象和方法，供其他相关组件使用

1. HashRouter：该组件使用 hash 模式匹配
2. BrowserRouter：该组件，使用 BrowserHistory 模式匹配

通常 Router 组件只有一个，将该组件包裹整个页面

## Route 组件

根据不同的地址，展示不同的组件

重要属性：

1. path:匹配的路径（可以写数组['xxx','xxx','yy']）即这几个路径都可以访问
   1. 默认情况下，不区分大小写,可以设置 sensitive 属性为 true，来区分大小写
   2. 默认情况下， 包含就会匹配，若想精确匹配加上 exact
   3. 如果不写 path，则会匹配任意路径
2. component:路径对应的相应组件
3. children:
   1. 传递 React 元素，无论是否匹配(只要进行来匹配)，一定会显示 children，并且会忽略 component 属性
   2. 传递一个函数，该函数有多个参数，这些参数来自于上下文，该函数返回 react 元素，则一定会显示返回的元素，并且忽略 component 属性

Route 组件可以写在任意地方，只要保证它是 Router 组件的后代元素

## Switch 组件

写到 Switch 组件中的 Route 组件，当匹配到第一个 Route 后，会立即停止匹配
由于 Switch 组件会循环所有子元素，然后让每个子元素去完成匹配，若匹配到，则渲染对应的组件，然后停止循环，因此，不能在 Switch 的子元素中使用除 Route 外的其他组件

# 路由信息(props中的属性)

Router 组件会创建一个上下文，并且，向上下文中注入一些信息
该上下文对开发者是隐藏的，Route 组件若匹配到了地址，则会将这些上下文中的信息作为属性，传入相应的组件

## history

它并不是 window.history，我们通常利用该对象无刷新跳转地址

1. React-Router 中有两种模式：hash history（如果用 window.history）,当切换 hash 时就需要做较多的变动
2. 当使用 window.history.pushState 方法时，React 没有办法收到任何通知，导致无法刷新对应的组件

- push:将某个新的地址入栈
  - 参数 1:新的地址
  - 参数 2:可选，附带的状态数据
- replace:将某个新的地址替换掉当前栈中的地址
和window完全一样
- go
- forward
- back

## location 
与history.location 完全一致，是同一个对象，但是与window.location不同
location对象中记录了当前地址的相关信息

通常使用第三方库```query-string```来解析地址栏中的数据

## match
该对象中保存了，路由匹配的相关信息
isExact表示匹配的地址是否一样

实际上，书写在Route组件中的path是一个字符串正则
react-router使用第三方库：Path-to-RegExp,该库将一个字符串装换为一个正则

**向某个页面传递数据的方式：**
1. 使用state：在push/replace页面时，加入state
2. 利用search：把数据填写在地址栏上的?后
3. 利用hash：把数据填写在hash后面
4. params：把数据填写在路径中
5. path： 匹配的规则
6. url:真正的路径



## 不在路由组件中跳转的组件获得路由信息
某些组件没有直接放在Route中，而是嵌套在其他普通组件中，因此，它的props没有路由信息，如果这些组件需要获取路由信息，可以使用以下两种方式

1. 将路由信息一层一层的传递过去
2. 使用react-router提供的高阶组件withRouter 包装要使用的组件，该高阶会返回一个新组件，新组件将向提供的组件注入路由信息