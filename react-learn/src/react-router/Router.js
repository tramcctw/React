import React, { Component } from "react";
import ctx from './ContextRouter';
import matchPath from './matchPath';

export default class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.history.location,
    };
  }

  componentDidMount() {
    this.unListen = this.props.history.listen((location, action) => {
      // 渲染界面的关键
      this.setState({
        location,
      });
    });
  }

  componentWillUnmount(){
      this.unListen();
  }

  ctxValue = {};

  render() {
    this.ctxValue.history = this.props.history;     // 内部的location已经变化
    this.ctxValue.location = this.state.location;
    this.ctxValue.match = matchPath('/',this.state.location.pathname);
    return <ctx.Provider value={{...this.ctxValue}}>{this.props.children}</ctx.Provider>;
  }
}
