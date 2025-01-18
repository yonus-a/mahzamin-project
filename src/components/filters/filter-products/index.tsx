import getMostExpensiveProduct from "@utils/filters/product/getMostExpensiveProduct";
import FilterCategories from "../filter-categories";
import DialogContainer from "../../general/dialog-container";
import MaterialTheme from "../../general/material-theme";
import FilterBrands from "../filter-brands";
import DialogLayer from "../../general/dialog-layer";
import FilterPrice from "../filter-price";
import { Switch } from "@mui/material";
import DialogCta from "../../general/dialog-cta";
import Button from "../../general/button";
import Dialog from "../../general/dialog";
import "./style.scss";

export default async function FilterProducts() {
  const product = await getMostExpensiveProduct();

  const variants = {
    initial: { y: 150 },
    animate: { y: 0 },
  };

  return (
    <div className="filter-products">
      <Dialog ariaLabel="filter Product">
        <DialogCta>فیلتر</DialogCta>
        <DialogLayer>
          <DialogContainer variants={variants}>
            <MaterialTheme>
              <form method="get">
                <FilterCategories />
                <FilterBrands />
                <FilterPrice maxPrice={product?.price || 0} />
                <div className="switch-container">
                  <h2>فقط کالاهای موجود</h2>
                  <Switch className="switch" name="avalable" />
                </div>
                <Button type="submit" className="submit">
                  اعمال فیلتر
                </Button>
                <DialogCta type="button">لغو</DialogCta>
              </form>
            </MaterialTheme>
          </DialogContainer>
        </DialogLayer>
      </Dialog>
    </div>
  );
}
