import { Component } from "react";
import { withRouter } from "react-router-dom";

class Prompt extends Component {
  static defaultProps = {
    when: false,
    message: "",
  };

  componentDidMount() {
    if (this.props.when) {
      this.unblock = this.props.history.block(this.props.message);
    } else {
      this.unblock && this.unblock();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.handleBlock();
  }

  handleBlock() {
    if (this.props.when) {
      this.unblock = this.props.history.block(this.props.message);
    } else {
      this.unblock && this.unblock();
    }
  }

  componentWillUnmount() {
    this.unblock && this.unblock();
  }

  render() {
    return null;
  }
}

export default withRouter(Prompt);
