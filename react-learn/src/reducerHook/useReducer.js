import { useState } from "react";
export default function useReducer(reducer, initState, func) {
  const [state, setState] = useState(func ? func(initState) : initState);
  function dispatch(action) {
    const newState = reducer(state, action);
    setState(newState);
  }
  return [state, dispatch];
}
