import { useCallback } from "react";

function useToast() {
  const toast = useCallback(({ title, description }) => {
    console.log(`${title}: ${description}`);
    alert(`${title}\n${description}`);
  }, []);

  return { toast };
}

export { useToast };
