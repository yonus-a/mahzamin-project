export default function filterProductBaseSearch(searchParams: any) {
  const { search } = searchParams;
  if (!search) return {};

  return {
    name: {
      contains: search,
    },
  };
}
