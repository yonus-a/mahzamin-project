import Link from "next/link";

export default function QuickAccessLinks() {
  return (
    <div className="quick-access-links">
      <h3>دسترسی سریع</h3>
      <ul>
        <li>
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li>
          <Link href="/">فروشگاه</Link>
        </li>
        <li>
          <Link href="/">سبد خرید</Link>
        </li>
        <li>
          <Link href="/">حساب کاربری من</Link>
        </li>
      </ul>
    </div>
  );
}
