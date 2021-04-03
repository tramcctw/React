import React from "react";
import useAllStudents from "./useAllStudents";

export default function App() {
  const stus = useAllStudents();
  const name = stus.map((item, index) => <li key={index}>{item.name}</li>);
  return <>{name}</>;
}
