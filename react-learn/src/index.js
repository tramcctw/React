import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'

// const app = <div>
//   <h1>
//     标题
//     {['abc',null,<p>段落</p> ]}
//   </h1>
//    <p>
//      {undefined}
//    </p>
// </div>

// console.log(app)

class App extends React.Component{
  state = {
    a:1
  }
  render(){
    return <h2>{this.state.a}</h2>
  }
}

console.log(new App())

// function  Comp1(props) {
//   return <h1>Comp1 {props.n}</h1>
// }

// function  App(props) {
//   return (
//     <div>
//         <Comp1 n={5}/>
//     </div>
//   )
// }

ReactDOM.render(<App/>,
  document.getElementById('root')
);

// console.log(<App/>)
// console.log(React.createElement(App,null,null))
