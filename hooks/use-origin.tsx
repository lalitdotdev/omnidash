// safely accessing the window object in nextJs13 little bit complicated

import { useEffect, useState } from "react";

// because most server side rendering frameworks don't have a window object and nextJs is one of them so we need to check if the window object is available or not before accessing it

export const useOrigin = () => {
  const [mounted, setMounted] = useState(false);

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  // For avoiding hydration mismatch error in nextJs we are using useEffect hook to set the mounted state to true after the component is mounted

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return origin;
};
