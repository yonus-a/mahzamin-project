import AdminContainer from "@components/admin-container";
import CreateProductForm from "@components/create-product-form";

export default function AddProduct() {
  return (
    <main className="add-product">
      <AdminContainer>
        <CreateProductForm />
      </AdminContainer>
    </main>
  );
}
