import { useRef, useCallback, useEffect } from "react";

function useDebounce(fn, delay, setval) {
  const { current } = useRef({ fn, timer: null });
  useEffect(() => {
    current.fn = fn;
  }, [fn]);
  return useCallback((e) => {
    setval(e.target.value);
    if (current.timer) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(() => {
      current.fn(e);
    }, delay);
  });
}
export default useDebounce;
