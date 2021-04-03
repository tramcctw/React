import React, { useEffect, useState } from "react";

export default function Test() {
  const [n, setN] = useState(10);
  //   console.log(n);
  useEffect(() => {
    let timer = setInterval(() => {
      setN(n - 1);
      console.log(n);
      //  这一次渲染后n的值!!!
      if (n === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setN(n - 1);
        }}
      >
        -
      </button>
      <h1>{n}</h1>
      <button
        onClick={() => {
          setN((preN) => preN + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
