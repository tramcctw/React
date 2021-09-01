import React, { Component } from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

let prev, next, ac, unBlock;

class MyGuardRouter extends Component {
  componentDidMount() {
    // 设置阻塞;
    unBlock = this.props.history.block((location, action) => {
      prev = this.props.history.location;
      next = location;
      ac = action;
      return "";
    });

    this.unListen = this.props.history.listen((location, action) => {
      const prevLocation = this.props.location;
      this.props.onChange(prevLocation, location, action, this.unListen);
    });
  }

  componentWillUnmount() {
    unBlock();
    this.unListen();
  }

  render() {
    return null;
  }
}

const MyGuardRouterWrapper = withRouter(MyGuardRouter);

class GuardRouter extends Component {
  handleConfirmation = (msg, commit) => {
    this.props.onBeforeChange(prev, next, ac, commit, unBlock);
  };

  render() {
    return (
      <Router getUserConfirmation={this.handleConfirmation}>
        <MyGuardRouterWrapper onChange={this.props.onChange} />
        {this.props.children}
      </Router>
    );
  }
}

export default GuardRouter;
