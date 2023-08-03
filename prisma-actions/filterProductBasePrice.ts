export default function filterProductBasePrice(min: number, max: number) {
  if (max >= 0 && min >= 0) {
    return {
      categoryId: 1,
      price: {
        gt: min,
        lt: max,
      },
    };
  }
  return {};
}
