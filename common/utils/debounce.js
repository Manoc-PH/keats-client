import { useEffect, useCallback } from "react";

// * use it like this:
// useDebounce(search, [text], 400);
export default function useDebounce(effect, dependencies, delay) {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}
