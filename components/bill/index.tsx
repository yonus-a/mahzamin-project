import Button from "../button";
import "./style.scss";

interface Props {
  items: any;
}

export default function Bill({ items }: Props) {
  const totoalPrice = items.reduce(
    (acc: any, { product }: any) => acc + product.price,
    0
  );

  return (
    <div className="bill">
      <h2>اطلاعات پرداخت</h2>
      <p>
        مبلغ کالاها
        <strong>{totoalPrice} ریال</strong>
      </p>
      <p>
        هزینه ارسال
        <span>در مرحله بعد مشخص می شود</span>
      </p>
      <hr />
      <p>
        مبلغ قابل پرداخت
        <strong>{totoalPrice} ریال</strong>
      </p>
      <Button>ادامه</Button>
    </div>
  );
}
