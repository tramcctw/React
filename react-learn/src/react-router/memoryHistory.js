// 用于移动端，移动端没有地址栏

import { createMemoryHistory } from 'history';

window.createMemoryHistory = createMemoryHistory;
window.h = createMemoryHistory({
    hashType:'noslash',     // hash 展示的类型
    // basename:'/news',       // 根路径
    forceRefresh: false,    //改变地址是否强制刷新
    keyLength: 4,      // 栈中记录的是location，两个location可能一样，所以需要使用key区分，可以的长度
    getUserConfirmation: (msg,callback)=>{
        callback(window.confirm(msg));
    }
});

// window.h.block('确定要跳转吗？')
window.h.block((location,action) => {
    console.log(location,action);
    return '确定要跳转吗？';
});