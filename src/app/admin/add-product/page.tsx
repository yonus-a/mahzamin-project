import CreateProductForm from "@components/create-product-form";
import getCategories from "@server-actions/category/getCategories";
import MdContainer from "@components/general/md-container";
import getColors from "@server-actions/color/getColors";
import getBrands from "@server-actions/brand/getBrands";
import getLogos from "@server-actions/getLogos";

export default async function AddProduct() {
  const categories = await getCategories();
  const brands = await getBrands();
  const colors = await getColors();
  const logos = await getLogos();

  return (
    <main>
      <MdContainer>
        <CreateProductForm
          brands={brands}
          categories={categories}
          colors={colors}
          logos={logos}
        />
      </MdContainer>
    </main>
  );
}
