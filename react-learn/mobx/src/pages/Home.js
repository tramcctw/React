import React from "react";
import { observer } from "mobx-react";

@observer
class Home extends React.Component {
  render() {
      const {appState} = this.props;
    return (
      <div>
        <h1>{appState.count}</h1>
        <button onClick={()=>{appState.increase()}}>+</button>
        <button onClick={()=>{appState.decrease()}}>-</button>
      </div>
    );
  }
}

export default Home;
