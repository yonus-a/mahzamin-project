import ProductGallary from "../product-gallary";
import AddToCart from "../add-to-cart";
import "./style.scss";

interface Props {
  product: any;
}

export default function ProductGeneralInfo({ product }: Props) {
  return (
    <div className="product-general-info">
      <ProductGallary
        images={product.product_image}
        main={product.image}
        alt={product.name}
      />
      <div className="left-col">
        <h1>{product.name}</h1>
        <ul>
          <li>برند: {product.brand.name}</li>
          <li>دسته بندی : {product.category.name}</li>
        </ul>
        <AddToCart product={product} />
      </div>
    </div>
  );
}
