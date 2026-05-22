export function Skeleton({
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

export function ListItemSkeleton() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 0",
        borderBottom: "1px solid #8a8070",
      }}
    >
      {/* <Skeleton circle height={36} /> */}
      <div
        style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}
      >
        <Skeleton height={50} width="100%" />
        <Skeleton height={10} width="50%" />
        <Skeleton height={10} width="50%" />
        <Skeleton height={10} width="50%" />
      </div>
    </div>
  );
}
