import React, { useContext } from "react";

const ctx = React.createContext();

// function A() {
//   return <ctx.Consumer>{(value) => <h1>{value}</h1>}</ctx.Consumer>;
// }

function A() {
  const val = useContext(ctx);
  return <h1>{val}</h1>;
}

export default function App() {
  return (
    <ctx.Provider value="aa">
      <A />
    </ctx.Provider>
  );
}
