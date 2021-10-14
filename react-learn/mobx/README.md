# mobx 基本使用

1. 定义状态并使其可观察
   可以使用任何喜欢的数据结构来存储状态，比如对象，数组，类，循环数据结构、引用。只要
   确保所有会随时间流逝而改变的属性打上 mobx 的标记使它们变得可观察即可
   
```js
import { observable } from "mobx";

var appState = observable({
    timer: 0,
});
```

2. 创建视图以响应状态的变化
   可以创建视图，当状态改变时，视图会自动更新

```js
import { observer } from "mobx-react";

@observer
class TimerView extends React.Component {
  render() {
    return (
      <button onClick={this.onReset.bind(this)}>
        Seconds passed: {this.props.appState.timer}
      </button>
    );
  }

  onReset() {
    this.props.appState.resetTimer();
  }
}

ReactDOM.render(<TimerView appState={appState} />, document.body);
```

3. 更改状态
   mobx 帮助你以一种简单直观的方式来完成工作,只有在严格模式下才需要使用 action，最好使用，
   可以更好的组织应用，并表达一个函数修改状态的意图，同时还应用事务获取最佳的性能

```js
appState.resetTimer = action(function reset() {
  appState.timer = 0;
});

setInterval(
  action(function tick() {
    appState.timer += 1;
  }),
  1000
);
```
