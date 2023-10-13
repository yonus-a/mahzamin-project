export default function filterProductBasePrice(min: number, max: number) {
  if (max >= 0 && min >= 0) {
    return {
      price: {
        gt: min,
        lt: max + 1,
      },
    };
  }

  return {};
}
