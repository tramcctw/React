import React from "react";
import Home from './pages/Home';
class App extends React.Component {
  render(){
    return (
      <div>
        <Home appState={this.props.appState}/>
      </div>
    );
  }
}

export default App;
