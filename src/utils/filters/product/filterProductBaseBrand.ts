export default function filterProductBaseBrand(searchParams: any) {
  const { brand } = searchParams;
  if (!brand) return {};

  return {
    Brand: {
      name: {
        in: [brand].flat(),
      },
    },
  };
}
