import React from "react";
// import useReducer from "./useReducer";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      if (state === 0) {
        return state;
      }
      return state - 1;
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, 1, function (args) {
    return args * 2;
  });
  return (
    <>
      <h1>{state}</h1>
      <button
        onClick={() => {
          dispatch({ type: "decrease" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increase" });
        }}
      >
        +
      </button>
    </>
  );
}
