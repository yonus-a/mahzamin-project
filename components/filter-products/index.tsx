import getMostExpensiveProduct from "@prisma-actions/getMostExpensiveProduct";
import DialogContainer from "@components/dialog-container";
import MaterialTheme from "@components/material-theme";
import FilterCategories from "../filter-categories";
import DialogLayer from "@components/dialog-layer";
import DialogCta from "@components/dialog-cta";
import FilterBrands from "../filter-brands";
import FilterPrice from "../filter-price";
import { Switch } from "@mui/material";
import Button from "../button";
import Dialog from "../dialog";
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
              <form>
                <FilterCategories />
                <FilterBrands />
                <FilterPrice maxPrice={product?.price} />
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
