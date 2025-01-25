import getCategories from "@server-actions/category/getCategories";
import AddProductClient from "@components/product/add-product-client";
import MdContainer from "@components/general/md-container";
import getColors from "@server-actions/color/getColors";
import getBrands from "@server-actions/brand/getBrands";
// import getLogos from "@server-actions/getLogos";

export default async function AddProduct() {
  const categories: any = await getCategories();
  const brands: any = await getBrands();
  const colors: any = await getColors();
  // const logos = await getLogos();

  return (
    <main>
      <MdContainer>
        <AddProductClient
          brands={brands}
          categories={categories}
          colors={colors}
          logos={[]}
        />
      </MdContainer>
    </main>
  );
}
