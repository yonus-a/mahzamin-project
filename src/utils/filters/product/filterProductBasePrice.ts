export default function filterProductBasePrice(searchParams: any) {
  const { min, max } = searchParams;

  if (+max >= 0 && +min >= 0) {
    return {
      price: {
        gt: min,
        lt: max + 1,
      },
    };
  }

  return {};
}
