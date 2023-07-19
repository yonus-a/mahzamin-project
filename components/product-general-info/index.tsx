import ProductImages from "@components/product-images";
import "./style.scss";

export default function ProductGeneralInfo({ product }: { product: any }) {
  return (
    <div className="product-general-info">
      <ProductImages
        main={product.image}
        productId={product.id}
        alt={product.name}
      />
      <div>
        <h1>{product.name}</h1>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
