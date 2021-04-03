import React from "react";
import scrollRecover from "./common/scrollRecover";

export default function withScoll(Comp) {
  return class withScollWrapper extends React.Component {
    componentDidMount() {
      scrollRecover();
    }

    render() {
      return <Comp {...this.props} />;
    }
  };
}
