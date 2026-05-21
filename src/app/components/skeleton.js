export default function Skeleton({
  width = "100%",
  height = 12,
  circle = false,
  style,
}) {
  return (
    <div
      className={`skeleton${circle ? " circle" : ""}`}
      style={{ width: circle ? height : width, height, ...style }}
    />
  );
}
