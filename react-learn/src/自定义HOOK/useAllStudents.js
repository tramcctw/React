import { useEffect, useState } from "react";
import { getAllStudents } from "../services/student";

export default function useAllStudents() {
  const [stus, setStus] = useState([]);
  useEffect(() => {
    (async () => {
      const stus = await getAllStudents();
      setStus(stus);
    })();
  }, []);
  return stus;
}
