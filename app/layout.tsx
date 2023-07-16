import { Metadata } from "next";
import Header from "@components/header";
import SvgSprite from "@components/svg-sprite";
import "@styles/global.scss";

export const metadata: Metadata = {
  title: "فوشگاه اینترنتی ماه زمین",
  description:
    "فروشگاه اینترنتی ماه زمین یکی از بهترین فروشگاه موبایل و لوازم جانبی است",
  openGraph: {
    title: "فوشگاه اینترنتی ماه زمین",
    url: "https://mahzamin.ir",
    type: "website",
    locale: "fa_IR",
    description:
      "فروشگاه اینترنتی ماه زمین یکی از بهترین فروشگاه موبایل و لوازم جانبی است",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" prefix="og: https://ogp.me/ns#">
      <body>
        <Header />
        {children}
        <SvgSprite />
      </body>
    </html>
  );
}
