import Image from "next/image";
import "./style.scss";

export default function AdminShowProducts({ products }: { products: any }) {
  return (
    <div className="admin-show-products">
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
              {/* TODO */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
