# React Router 的概述

无论是应用 vue，还是 react，开发的单页应用程序，可能只是该站点的一部分（某个一个功能块）
vue 基本上使用的是静态路由
react 使用的是动态路由

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
属性

- getUserConfirmation (接收拦截器的消息，决定页面是否跳转)
  - 参数 1:msg 拦截器的消息
  - 参数 2:callback
    - 参数 1：boolean 决定是否跳转

## Route 组件

根据不同的地址，展示不同的组件

重要属性：

1. path:匹配的路径
   1. 默认情况下，不区分大小写,可以设置 sensitive 属性为 true，来区分大小写
   2. 默认情况下， 包含就会匹配，/router/xxx(包含) 若想精确匹配加上 exact
   3. 如果不写 path，则会匹配任意路径
2. component:路径对应的相应组件
3. children(优先级要高于 render):
   1. 传递 React 元素，必须匹配到，一定会显示 children，并且会忽略 component 属性
   2. 传递一个函数，无论是否匹配到，只要进行匹配，该函数有多个参数，这些参数来自于上下文，该函数返回 react 元素，则一定会显示返回的元素，并且忽略 component 属性 **放在 Switch 中只有匹配到了才有效**
      只有匹配到了 match 才有值
4. render(此时不需要写 component 属性):(val(router 上下文))=>{return react 节点}
   给一个函数，当正确匹配到了，就会运行该函数，该函数要返回一个可渲染的 react 节点，然后渲染该节点,优先级低于 components

Route 组件可以写在任意地方，只要保证它是 Router 组件的后代元素

## Switch 组件

写到 Switch 组件中的 Route 组件，当匹配到第一个 Route 后，会立即停止匹配
由于 Switch 组件会循环所有子元素，然后让每个子元素去完成匹配，若匹配到，则渲染对应的组件，然后停止循环，因此，不能在 Switch 的子元素中使用除 Route 外的其他组件

# 路由信息

Router 组件会创建一个上下文，并且，向上下文中注入一些信息
该上下文对开发者是隐藏的，Route 组件若匹配到了地址，则会将这些上下文中的信息作为属性，传入相应的组件

## history

它并不是 window.history，我们通常利用该对象无刷新跳转地址

为什么不使用 windo.history 进行跳转

1. React-Router 中有两种模式：hash history（如果用 window.history,当切换 hash 跳转方式时(HashRouter)就需要做较多的变动，因为 window.history 不能用 hash 的 api）
2. 当使用 window.history.pushState 方法时，React 没有办法收到任何通知，将导致 React 无法知晓地址发生变化,导致无法刷新对应的组件

- push:将某个新的地址入栈

  - 参数 1:新的地址
  - 参数 2:可选，附带的状态数据,此时 window.history.state.state 里面也有加入的状态，缺陷，直接访问该路由不会有状态数据

- replace:将某个新的地址替换掉当前栈中的地址（用法和 push 一致）

- go
- forward
- back

## location

与 history.location 完全一致，是同一个对象，但是与 window.location 不同 location 对象中记录了当前地址的相关信息

通常使用第三方库 query-string 来解析地址栏中的数据

## match

该对象中保存了，路由匹配的相关信息 isExact 表示匹配的地址是否一样和 exact 属性无关

- path： 匹配的规则
- url:真正的路径

实际上，书写在 Route 组件中的 path 是一个字符串正则 react-router 使用第三方库：Path-to-RegExp,该库将一个字符串装换为一个正则

**向某个页面传递数据的方式:**

1.  使用 state：在 push/replace 页面时，加入 state
2.  利用 search：把数据填写在地址栏上的?后
3.  利用 hash：把数据填写在 hash 后面
4.  params：把数据填写在路径中 例如/news/2020/12/20,用 match 中的 params 去取数据

## 不在路由组件中跳转的组件获得路由信息

某些组件没有直接放在 Route 中，而是嵌套在其他普通组件中，因此，它的 props 没有路由信息，如果这些组件需要获取路由信息，可以使用以下两种方式

1.  将路由信息一层一层的传递过去
2.  使用 react-router 提供的高阶组件 withRouter 包装要使用的组件，该高阶会返回一个新组件，新组件将向提供的组件注入路由信息

# 其他组件

## Link

生成一个无刷新跳转的 a 元素

- to
  - 字符串：跳转的目标地址
  - 对象：
    - pathname:url 路径
    - Search
    - hash
    - state： 附加的状态数据
- replace:bool,表示是否替换当前地址，默认是 false
- innerRef:可以将内部的 a 元素的 ref 附着在传递的对象或者函数参数上
  - 函数
  - ref 对象
- 可以在 Link 上加一些属性，会自动加到 a 标签 上

## NavLink

是一种特殊的 Link，Link 组件具备的功能，它都有
它具备的额外功能是：根据当前地址和链接地址，来决定该链接的样式
当链接地址和页面地址匹配时，增加 active 属性，可以自己手动输入页面地址

- activeClassName 改写增加的类名
- activeStyle 匹配时使用的内联样式
- exact:是否精确匹配
- sensitive: 是否区分大小写
- strict:是否严格匹配最后一个/

## Redirect

重定向组件，加载到该组件时，会自动无刷新跳转到另外一个地址

- to：跳转的地址(与 Link 的 to 一致)
  - 字符串
  - 对象
- push:默认为 false，表示跳转使用替换的方式，设置为 true 后，则使用 push 的方式跳转
- from：当匹配到 from 地址规则时才进行跳转,只有放在 switch 中才有效，不放的话，一定重定向，且如果不放 switch 则无法使用动态路由
- exact:是否精确匹配
- sensitive: 是否区分大小写
- strict:是否严格匹配最后一个/

# 导航守卫

导航守卫：当离开一个页面时，进入另一个页面时，触发的事件

history 对象

- listen:unlisten(返回取消函数): **监听地址的变化**，当地址发生变化时，会调用传递当函数
- 运行时间点是在跳转之前

  - 参数：函数
    - 参数 1:location 对象，记录当前的地址信息
    - 参数 2:action,一个字符串，表示进入该地址的方式
      - POP:
        - 通过点击浏览器后退，前进
        - 调用 history.go
        - 调用 history.goBack
        - 调用 history.goForward
      - PUSH:入栈
        - 点击超链接
        - 调用 history.push
      - REPLACE:替换
        - history.replace

- block 拦截器，将拦截路由的跳转，拦截信息传给 Router 的 getUserConfirmation
  - 参数 1：str:string
  - 参数 2： 函数，函数的返回结果是一个字符串，用于表示返回的消息
    - 参数 1：location
    - 参数 2: action
      **因为 history 都是上下文中的，所以都是同一个 history，所以无论在上下文中的哪个组件添加拦截器，根 Router 都会监听到**
- 返回一个回调函数，用于取消阻塞器

# 滚动条复位

## 高阶组件

## 使用 useEffect

## 使用自定义的导航守卫
