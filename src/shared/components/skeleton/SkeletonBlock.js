import SkeletonList from "./SkeletonList";

export default function SkeletonBlock({
  isLoading,
  showContent,
  children,
  className,
  circle = false,
  count,
}) {
  if (!showContent)
    return (
      <SkeletonList
        isLoading={isLoading}
        className={className}
        count={count}
        circle={circle}
      />
    );

  return children;
}
