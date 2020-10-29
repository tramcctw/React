import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const app = <div>
  <h1>
    标题
    {['abc',null,<p>段落</p> ]}
  </h1>
   <p>
     {undefined}
   </p>
</div>

ReactDOM.render(<App/>,
  document.getElementById('root')
);

console.log(<App/>)
console.log(React.createElement(App,null,null))
