import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function App() {
  const [n, setN] = useState(0);
  const ele = useRef();
  useLayoutEffect(() => {
    ele.current.innerText = Math.random(); //渲染前
    console.log("hello");
  });

  //   useEffect(() => {
  //     ele.current.innerText = Math.random(); // 渲染后
  //     console.log("hello");
  //   });

  return (
    <div>
      <h1 ref={ele}>{n}</h1>
      <button
        onClick={() => {
          setN(n + 1);
        }}
      >
        按钮
      </button>
    </div>
  );
}
