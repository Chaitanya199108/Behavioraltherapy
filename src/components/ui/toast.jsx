import { useState, useCallback } from "react";

export function toast({ title, description, variant }) {
  console.log(`[${variant || "info"}] ${title || ""} ${description || ""}`);
}

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {
    setToasts((prev) => [...prev, toast]);
  }, []);

  return {
    toasts,
    toast: addToast,
  };
}
