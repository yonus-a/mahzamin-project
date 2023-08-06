export default function filterProductBaseSearch(value: string) {
  if (!value) return {};

  return {
    name: {
      contains: value,
    },
  };
}
