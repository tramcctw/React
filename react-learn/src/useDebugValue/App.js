import React, { useEffect, useState, useDebugValue } from "react";

function useTest() {
  const [student] = useState([]);
  useDebugValue(student); // 将状态显示到调试栏上
  return student;
}

export default function App() {
  const [state] = useState(0);
  useEffect(() => {
    console.log("hello");
  }, []);
  useTest();
  return <>{state}</>;
}
