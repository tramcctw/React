import { useEffect } from "react";

export default function useTimer(func, time) {
  useEffect(() => {
    const timer = setInterval(() => {
      func();
    }, time);
    return () => {
      timer && clearInterval(timer);
    };
  }, [func, time]);
}
