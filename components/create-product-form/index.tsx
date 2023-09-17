import ChooseBrand from "@components/choose-brand";
import ChooseCategory from "@components/choose-category";
import "./style.scss";
import ChooseColor from "@components/choose-color";

export default function CreateProductForm() {
  return (
    <form className="create-product" action="">
      <div className="group">
        <ChooseBrand />
        <ChooseCategory />
      </div>
      <div className="group">
        <label className="input-label">
          عنوان محصول
          <input type="text" className="input" name="name" required />
        </label>
        <label className="input-label">
          قیمت
          <input type="text" className="input" name="name" required />
        </label>
      </div>
      <div className="group">
        <ChooseColor />
      </div>
    </form>
  );
}
