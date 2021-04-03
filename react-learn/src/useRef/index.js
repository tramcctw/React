import React, { useRef, useEffect, useState } from "react";

export default function App() {
  const [n, setN] = useState(10);
  let timerRef = useRef(n);
  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      setN(timerRef.current - 1);
      timerRef.current--;
      if (timerRef.current === 0) {
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <h1>{n}</h1>
    </>
  );
}
