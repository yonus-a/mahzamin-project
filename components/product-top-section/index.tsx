// import prisma from "@lib/prisma";

// interface Props {
//   product: {
//     name: string;
//     categoryId: number;
//     brandId: number;
//   };
// }

// export default async function ProductTopSection(product: Props) {
//   var category = await prisma.category.findUnique({
//     where: {
//       id: product.categoryId,
//     },
//   });

//   var brand = await prisma.brand.findUnique({
//     where: {
//       id: brandId,
//     },
//   });

//   return (
//     <div className="product-top-section">
//       <div className="left-col">
//         <h1>{name}</h1>
//         <ul>
//           <li>برند: {brand?.name}</li>
//           <li>دسته بندی: {category?.name}</li>
//         </ul>
//       </div>
//     </div>
//   );
// }
