import React from "react";
import ctx from "./ContextRouter";
import matchPath from "./matchPath";

// 注意，传入匹配的组件的match是不同的。
// 注意 children 无论都要渲染，可以的react 节点 也可以是 函数 如果是函数要传入ctx
// 注意 render 优先级高于component，render 是一个函数，传入 ctx
// 注意 component 是一个组件

export default class Route extends React.Component {
  renderChilren = (value) => {
    // children 存在的情况下，只渲染children
    if (this.props.children) {
      if (typeof this.props.children === "function") {
        return this.props.children(value);
      } else {
        return <this.props.children {...value} />;
      }
    }

    // render 存在的情况下
    if (this.props.render && value.match) {
      return this.props.render(value);
    }

    // render 不存在
    if (this.props.component && value.match) {
      const Component = this.props.component;
      return <Component {...value} />;
    }
    return null;
  };

  ctxContext = (value) => {
    const ctxValue = {};
    ctxValue.location = value.location;
    ctxValue.history = value.history;
     // 更新当前匹配的情况
    ctxValue.match = matchPath(this.props.path || '/', value.location.pathname, {
      exact: this.props.exact || false,
      sensitive: this.props.sensitive || false,
      strict: this.props.strict || false,
    });
    // 方便后代元素使用 ， 更新ctxValue
    return (
      <ctx.Provider value={ctxValue}>
        {this.renderChilren(ctxValue)}
      </ctx.Provider>
    );
  };

  render() {
    return <ctx.Consumer>{this.ctxContext}</ctx.Consumer>;
  }
}
