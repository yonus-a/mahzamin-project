export default function sort(value: string): any {
  switch (value) {
    case "minPrice":
      return {
        price: "asc",
      };
    case "maxPrice":
      return {
        price: "desc",
      };
    case "new":
      return {
        id: "desc",
      };
    case "old":
      return {
        id: "asc",
      };
    default:
      return {
        id: "desc",
      };
  }
}
