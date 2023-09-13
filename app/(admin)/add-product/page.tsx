import AdminContainer from "@components/admin-container";
import ChooseBrand from "@components/choose-brand";

export default function AddProduct() {
  return (
    <main className="add-product">
      <AdminContainer>
        <form action="">
          <ChooseBrand />
        </form>
      </AdminContainer>
    </main>
  );
}
