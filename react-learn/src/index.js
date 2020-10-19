import React from 'react';
import ReactDOM from 'react-dom';
import {A,B} from './components/Comp'
import withLog from './HOC/withLog'
import withLogin from './HOC/withLogin'

let LogA = withLog(A)
// let LogB = withLog(B)
// let LA = withLogin(LogA)
// let LB = withLogin(LogB)

const Aref = React.createRef()

ReactDOM.render(<div>
  {/* <LA login={true} num={1}/>
  <LB login={true} num={2}/> */}
  <LogA ref={Aref}></LogA>
  {/* 如果没有转发，则Aref执向的就是本组件实例 */}
</div>,
  document.getElementById('root')
);

console.log(Aref);

