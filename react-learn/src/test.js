import {createBrowserHistory} from './react-router/history';

window.createBrowserHistory = createBrowserHistory;

window.h = createBrowserHistory({
    // basename:'/news',       // 根路径
    forceRefresh: false,    //改变地址是否强制刷新
    keyLength: 4,      // 栈中记录的是location，两个location可能一样，所以需要使用key区分，可以的长度
    getUserConfirmation: (msg,callback)=>{
        callback(window.confirm(msg));
    }
});

window.unlisten = window.h.listen(() => {
    console.log('地址跳转了');
})

window.h.block((location,action) => {
    console.log(location,action);
    return '真的要跳转吗？';
});