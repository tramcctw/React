import React, { useState, useEffect } from "react";

export default function () {
  const [test, setTest] = useState(["hello"]);
  const [refresh, setRefresh] = useState({});

  function change() {
    test.push("html");
    setTest([...test]);
  }

  function find() {
    console.log(test);
  }

  return (
    <>
      <button
        onClick={() => {
          change();
        }}
      >
        按钮
      </button>

      <button
        onClick={() => {
          find();
        }}
      >
        查看
      </button>
    </>
  );
}
