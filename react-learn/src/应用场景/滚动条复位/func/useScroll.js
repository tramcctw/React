import { useEffect } from "react";
import scrollRecover from "./common/scrollRecover";

export default function useScroll(pathname) {
  useEffect(scrollRecover, [pathname]);
}
