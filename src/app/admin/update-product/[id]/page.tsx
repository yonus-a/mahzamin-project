import UpdateProductForm from "@components/product/update-product-form";
import getBrands from "@server-actions/brand/getBrands";
import getCategories from "@server-actions/category/getCategories";
import getColors from "@server-actions/color/getColors";
// import getLogos from "@server-actions/getLogos";
import MdContainer from "@components/general/md-container";
import getProduct from "@server-actions/product/getProduct";

export default async function UpdateProduct({
  params,
}: {
  params: { id: string };
}) {
  const id = Number.parseInt(params.id);
  const brands = await getBrands();
  const categories = await getCategories();
  const colors = await getColors();
  // const logos = await getLogos();
  // const product = await getProduct(id);

  return (
    <MdContainer>
      {/* <UpdateProductForm
        brands={brands}
        categories={categories}
        colors={colors}
        logos={logos}
        product={product[0]}
      /> */}
      test
    </MdContainer>
  );
}
