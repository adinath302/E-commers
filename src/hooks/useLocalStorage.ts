import { useEffect, useState, Dispatch, SetStateAction } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T),
): [T, Dispatch<SetStateAction<T>>] {
  // 1. Initialize state
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item !== null) {
        return JSON.parse(item);
      }

      // Handle functional initial value correctly
      return typeof initialValue === "function"
        ? (initialValue as () => T)()
        : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage "${key}":`, error);
      return typeof initialValue === "function"
        ? (initialValue as () => T)()
        : initialValue;
    }
  });

  // 2. Synchronize with localStorage on change
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value]);

  return [value, setValue];
}
