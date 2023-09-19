import ChooseBrand from "@components/choose-brand";
import ChooseCategory from "@components/choose-category";
import ChooseColor from "@components/choose-color";
import ImageInput from "@components/image-input";
import "./style.scss";

export default function CreateProductForm() {
  return (
    <form className="create-product" action="">
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
      <div className="group mt-4">
        <ChooseColor />
        <ImageInput />
      </div>
    </form>
  );
}
