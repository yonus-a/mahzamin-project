import ProductGallary from "../product-gallary";
import AddToCart from "../add-to-cart";
import "./style.scss";

interface Props {
  product: any;
}

export default function ProductGeneralInfo({ product }: Props) {
  const colors = product.ProductColor.map(({ Color }: any) => Color);

  return (
    <div className="product-general-info">
      <ProductGallary
        main={product.image}
        images={product.Image}
        alt={product.name}
      />
      <div className="left-col">
        <h1>{product.name}</h1>
        <ul>
          <li>برند: {product.Brand.name}</li>
          <li>دسته بندی : {product.Category.name}</li>
        </ul>
        <AddToCart colors={colors} product={product} />
      </div>
    </div>
  );
}
