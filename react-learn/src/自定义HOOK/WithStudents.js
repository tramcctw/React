import React, { Component } from "react";
import { getAllStudents } from "../services/student";
function WithStudents(Comp) {
  return class WrapperWithStudents extends Component {
    state = {
      stus: [],
    };

    async componentDidMount() {
      const stus = await getAllStudents();
      this.setState({
        stus,
      });
    }

    render() {
      return <Comp {...this.props} stus={this.state.stus}></Comp>;
    }
  };
}

function App(props) {
  const name = props.stus.map((item, index) => (
    <li key={index}>hello----{item.name}</li>
  ));
  return <>{name}</>;
}

export default WithStudents(App);
