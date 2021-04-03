import React, { useState } from "react";
import useTimer from "./useTimer";
function Timer() {
  useTimer(function () {
    console.log("hello");
  }, 1000);
  return <>{<h1>hello</h1>}</>;
}

export default function App() {
  const [isShow, setShow] = useState(true);
  return (
    <>
      {isShow && <Timer />}
      <button
        onClick={() => {
          setShow(!isShow);
        }}
      >
        显示/隐藏
      </button>
    </>
  );
}
