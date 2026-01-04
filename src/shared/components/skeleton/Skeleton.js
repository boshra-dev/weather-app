import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function CustomeSkeleton({
  baseColor,
  highlightColor,
  circle = false,
  className,
  height = "100%",
  isLoading,
  fadeDuration = 800,
}) {
  const [show, setShow] = useState(isLoading);
  const [isVisible, setIsVisible] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setShow(true);
      setIsVisible(true);
    } else {
      setShow(false);
      const timer = setTimeout(() => setIsVisible(false), fadeDuration);
      return () => clearTimeout(timer);
    }
  }, [isLoading, fadeDuration]);

  if (!isVisible) return null;

  return (
    <div
      className={`fade-wrapper ${show ? "fade-in" : "fade-out"}`}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
        <Skeleton circle={circle} height={height} className={className} />
      </SkeletonTheme>
    </div>
  );
}
