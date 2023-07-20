import ChooseColor from "@components/choose-color";
import ProductPriceCalculator from "@components/product-price-calculator";
import prisma from "@lib/prisma";
import "./style.scss";

interface Props {
  productId: number;
  productPrice: number;
}

export default async function ProductForm({ productId, productPrice }: Props) {
  var colors = await prisma.productColor.findMany({
    where: {
      productId,
    },
  });

  return (
    <form className="product-form">
      <ChooseColor colors={colors} />
      <ProductPriceCalculator productPrice={productPrice} />
    </form>
  );
}
