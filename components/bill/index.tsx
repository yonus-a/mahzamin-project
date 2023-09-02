import "./style.scss";
import Button from "@components/button";

export default function Bill({ items }: any) {
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
