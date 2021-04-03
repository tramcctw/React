import React, { useState, useMemo } from "react";

function Item(props) {
  console.log("item render");
  return <li>{props.i}</li>;
}

function Parent() {
  console.log("Parent render");
  const [n, setN] = useState(0);
  const list = useMemo(() => {
    const list = [];
    for (let i = 0; i < 1000; i++) {
      console.log(i);
      list.push(<Item key={i} i={i}></Item>);
    }
    return list;
  }, []);
  // 二次渲染后list并未变化，且内部的item也并未发生变化，所以item不会重新渲染
  return (
    <>
      {list}
      <input
        type="number"
        value={n}
        onChange={(e) => {
          setN(e.target.value);
        }}
      />
    </>
  );
}

export default function App() {
  return <Parent />;
}
