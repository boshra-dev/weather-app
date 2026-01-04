import CustomeSkeleton from "./Skeleton";

export default function SkeletonList({
  count = 1,
  className,
  circle = false,
  isLoading,
}) {
  if (count === 1) {
    return (
      <CustomeSkeleton
        className={className}
        circle={circle}
        isLoading={isLoading}
        baseColor="#cde8f7"
        highlightColor="#e9f6ff"
      />
    );
  }

  return Array.from({ length: count }).map((_, ind) => (
    <CustomeSkeleton
      key={`sk_${ind}`}
      className={className}
      circle={circle}
      isLoading={isLoading}
      baseColor="#cde8f7"
      highlightColor="#e9f6ff"
    />
  ));
}
