import UpdateProductForm from "@components/update-product-form";
import getBrands from "@prisma-actions/getBrands";
import getCategories from "@prisma-actions/getCategories";
import getColors from "@prisma-actions/getColors";
import getLogos from "@prisma-actions/getLogos";
import AdminContainer from "@components/admin-container";
import getProduct from "@prisma-actions/getProduct";

export default async function UpdateProduct({
  params,
}: {
  params: { id: string };
}) {
  const id = Number.parseInt(params.id);
  const brands = await getBrands();
  const categories = await getCategories();
  const colors = await getColors();
  const logos = await getLogos();
  const product = await getProduct(id);

  return (
    <AdminContainer>
      <UpdateProductForm
        brands={brands}
        categories={categories}
        colors={colors}
        logos={logos}
        product={product[0]}
      />
    </AdminContainer>
  );
}
