import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'



ReactDOM.render(<App/>,
  document.getElementById('root')
);

document.addEventListener('click',function(e){
  console.log('阻止剩余事件执行')
  e.stopImmediatePropagation()
})

document.addEventListener('click',function(e){
  console.log('okkk')
})
