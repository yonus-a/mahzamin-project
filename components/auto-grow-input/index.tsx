export default function AutoGrowInput(props: any) {
  return (
    <input
      {...props}
      style={{
        width: Math.max(props.value.toString().length + 6, 8) + "ch",
      }}
    />
  );
}
