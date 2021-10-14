import { observable, action } from "mobx";

const appState = observable({
  count: 10,
  increase: action(function () {
    appState.count += 1;
  }),
  decrease: action(function () {
    appState.count -= 1;
  }),
});

// appState.increase = function(){
//     appState.count += 1;
// }

// appState.decrease = function(){
//     appState.count -= 1;
// }

export default appState;
