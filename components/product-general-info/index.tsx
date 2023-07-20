import getProductImages from "@prisma-actions/getProductImages";
import getCategory from "@prisma-actions/getCategory";
import ProductForm from "@components/product-form";
import ProductGallary from "../product-gallary";
import getBrand from "@prisma-actions/getBrand";
import "./style.scss";

interface Props {
  product: any;
}

export default async function ProductGeneralInfo({ product }: Props) {
  const category = await getCategory(product.categoryId);
  const images = await getProductImages(product.id);
  const brand = await getBrand(product.brandId);

  return (
    <div className="product-general-info">
      <ProductGallary main={product.image} images={images} alt={product.name} />
      <div className="left-col">
        <h1>{product.name}</h1>
        <ul>
          <li>برند: {brand?.name}</li>
          <li>دسته بندی : {category?.name}</li>
        </ul>
        <ProductForm productId={product.id} productPrice={product.price} />
      </div>
    </div>
  );
}
