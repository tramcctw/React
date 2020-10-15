import React from 'react';
import ReactDOM from 'react-dom';
import {A,B} from './components/Comp'
import withLog from './HOC/withLog'
import withLogin from './HOC/withLogin'

let LogA = withLog(A,'abc')
let LogB = withLog(B,'bcd')
let LA = withLogin(LogA)
let LB = withLogin(LogB)

ReactDOM.render(<div>
  <LA login={true} num={1}/>
  <LB login={true} num={2}/>
</div>,
  document.getElementById('root')
);

