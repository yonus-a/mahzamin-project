import ChooseBrand from "@components/choose-brand";
import ChooseCategory from "@components/choose-category";
import ChooseColor from "@components/choose-color";
import ImageInputCreator from "@components/image-input-creator";
import InfoForm from "@components/info-form";
import "./style.scss";

export default function CreateProductForm() {
  async function handleSubmit(data: any) {
    "use server";
    console.log(data);
  }

  return (
    <form className="create-product" action={handleSubmit}>
      <div className="group mt-4">
        <ChooseBrand />
        <ChooseCategory />
      </div>
      <div className="group mt-3">
        <label className="input-label">
          عنوان محصول
          <input type="text" className="input" name="name" required />
        </label>
        <label className="input-label">
          قیمت
          <input type="text" className="input" name="name" required />
        </label>
      </div>
      <div className="mt-4">
        <ChooseColor />
      </div>
      <div className="mt-4">
        <ImageInputCreator />
      </div>
      <div className="mt-4">
        <InfoForm />
      </div>
      <button type="submit">submit</button>
    </form>
  );
}
