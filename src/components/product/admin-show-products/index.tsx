import Image from "next/image";
import DeleteProduct from "@components/delete-product";
import Link from "next/link";
import "./style.scss";

export default function AdminShowProducts({ products }: { products: any }) {
  return (
    <div className="admin-show-products">
      {products.length <= 0 && <h1 className="not-found">موردی یافت نشد !</h1>}
      <ul>
        {products.map((item: any) => (
          <li key={item.name}>
            <div className="right-side">
              <Image
                src={`/images/products/${item.image}`}
                alt={item.name}
                width={200}
                height={200}
              />
              <p>{item.name}</p>
            </div>
            <div className="left-side">
              <DeleteProduct id={item.id} />
              <Link href={`/admin/update-product/${item.id}`}>ویرایش</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
