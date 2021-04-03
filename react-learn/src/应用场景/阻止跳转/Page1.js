import React, { Component } from "react";
// import Prompt from "./Prompt";
import { Prompt } from "react-router-dom";

class Page1 extends Component {
  state = {
    val: "",
  };

  render() {
    return (
      <>
        <Prompt when={this.state.val !== ""} message={"dsdfjgl"} />
        <textarea
          value={this.state.val}
          onChange={(e) => {
            this.setState({
              val: e.target.value,
            });
          }}
        ></textarea>
      </>
    );
  }
}

export default Page1;
