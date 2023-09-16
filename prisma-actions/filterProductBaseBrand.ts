export default function filterProductBaseBrand(value: string | []) {
  if (!value) return {};

  return {
    Brand: {
      name: {
        in: [value].flat(),
      },
    },
  };
}
