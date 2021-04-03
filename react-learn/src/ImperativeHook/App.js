import React, { useRef, useImperativeHandle } from "react";

// class Test extends React.Component {
//   sayHello() {
//     console.log("hello");
//   }
//   render() {
//     return <h1>hello</h1>;
//   }
// }

function Test(props, ref) {
  useImperativeHandle(
    ref,
    () => {
      return {
        sayHello() {
          console.log("hello");
        },
      };
    },
    []
  );
  return <h1>hello</h1>;
}

const TestWrepper = React.forwardRef(Test);

export default function App() {
  const testRef = useRef();
  return (
    <div>
      <TestWrepper ref={testRef} />
      <button
        onClick={() => {
          testRef.current.sayHello();
        }}
      >
        按钮
      </button>
    </div>
  );
}
