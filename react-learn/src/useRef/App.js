import React, { useRef, useEffect, useState } from "react";

export default function App() {
  const [n, setN] = useState(10);
  let timerRef = useRef();
  useEffect(() => {
    if (n === 0) {
      return;
    }
    timerRef.current = setTimeout(() => {
      setN(n - 1);
    }, 1000);
    return () => {
      //这里清理函数运行的是上一次的清理函数
      clearTimeout(timerRef.current);
    };
  }, [n]);
  return (
    <>
      <h1>{n}</h1>
    </>
  );
}
