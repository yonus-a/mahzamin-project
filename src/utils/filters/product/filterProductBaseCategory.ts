export default function filterProductBaseCategory(searchParams: any) {
  const { category } = searchParams;
  if (!category) return {};

  return {
    Category: {
      name: {
        in: category,
      },
    },
  };
}
