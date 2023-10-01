import AdminContainer from "@components/admin-container";
import CreateProductForm from "@components/create-product-form";
import getBrands from "@prisma-actions/getBrands";
import getCategories from "@prisma-actions/getCategories";
import getColors from "@prisma-actions/getColors";
import getLogos from "@prisma-actions/getLogos";

export default async function AddProduct() {
  const brands = await getBrands();
  const categories = await getCategories();
  const colors = await getColors();
  const logos = await getLogos();

  return (
    <main className="add-product">
      <AdminContainer>
        <CreateProductForm
          brands={brands}
          categories={categories}
          colors={colors}
          logos={logos}
        />
      </AdminContainer>
    </main>
  );
}
