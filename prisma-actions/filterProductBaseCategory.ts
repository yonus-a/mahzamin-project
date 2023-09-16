const alternate = {
  mobile: "موبایل",
  laptop: "لپتاپ",
  watch: "ساعت هوشمند",
  accessories: "لوازم جانبی موبایل",
  tablet: "تبلت",
};

export default function filterProductBaseCategory(value: string | []) {
  if (!value) return {};

  return {
    Category: {
      name: {
        in: [value].flat().map((val) => {
          return alternate[val as keyof typeof alternate];
        }),
      },
    },
  };
}
