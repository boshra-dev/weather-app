import { useEffect, useState } from "react";

export default function useToggleContent(isLoading, delay = 1000) {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    if (isLoading) {
      setShowContent(false);
    }

    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);
  return showContent;
}
