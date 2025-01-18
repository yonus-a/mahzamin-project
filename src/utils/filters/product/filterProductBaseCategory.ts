const alternate = {
  mobile: "موبایل",
  laptop: "لپتاپ",
  watch: "ساعت هوشمند",
  accessories: "لوازم جانبی موبایل",
  tablet: "تبلت",
};

export default function filterProductBaseCategory(searchParams: any) {
  const { category } = searchParams;
  if (!category) return {};

  return {
    Category: {
      name: {
        in: [category].flat().map((val) => {
          return alternate[val as keyof typeof alternate];
        }),
      },
    },
  };
}
