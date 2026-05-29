import { useState, useCallback, useRef } from "react";

// Toast notification hook. Shows a message for `duration` ms then hides.
//
// Example:
//   const { toast, show } = useToast();
//   show("Saved!"); // shows for 2s
//   show("Error!", 5000); // shows for 5s
//   {toast && <div>{toast}</div>}
export default function useToast() {
  const [toast, setToast] = useState(null);
  const timeoutRef = useRef(null);

  const show = useCallback((msg, duration = 2000) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setToast(msg);
    timeoutRef.current = setTimeout(() => setToast(null), duration);
  }, []);

  return { toast, show };
}
