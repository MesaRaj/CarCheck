import { useEffect, useRef, useState } from "react";

// Custom hook for OTP countdown timer.
// Starts at `seconds` and counts down to 0, then sets done=true.
//
// Returns: { remaining, done, reset }
//
// Example:
//   const { remaining, done, reset } = useTimer(30);
//   // remaining = "00:29", "00:28", ..., done = true at 0
export default function useTimer(seconds = 30) {
  const [remaining, setRemaining] = useState(seconds);
  const [done, setDone] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setRemaining(seconds);
    setDone(false);
    intervalRef.current = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(intervalRef.current);
          setDone(true);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [seconds]);

  const reset = () => {
    setRemaining(seconds);
    setDone(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(intervalRef.current);
          setDone(true);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
  };

  const formatted = `00:${String(remaining).padStart(2, "0")}`;
  return { remaining: formatted, done, reset };
}
