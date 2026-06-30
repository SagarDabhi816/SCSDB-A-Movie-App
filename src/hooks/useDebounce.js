import { useState, useEffect } from "react";

/**
 * useDebounce
 * Returns a debounced copy of `value` that only updates after
 * `delay` milliseconds have passed without the value changing.
 *
 * @param {any}    value - The value to debounce (e.g. search input)
 * @param {number} delay - Delay in milliseconds (default 500 ms)
 */
const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the previous timer whenever value or delay changes
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
