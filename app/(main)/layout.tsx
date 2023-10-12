import CustomCartProvider from "@components/custom-cart-provider";
import SvgSprite from "@components/svg-sprite";
import WOWINIT from "@components/WOWINIT";
import Header from "@components/header";
import Footer from "@components/footer";
import { StrictMode } from "react";
import "@styles/global.scss";

// import swiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "swiper/css/autoplay";

// import animate.css
import "animate.css";

// export metadata
export * from "../metadata";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="fa" dir="rtl" prefix="og: https://ogp.me/ns#">
      <body className="m-top">
        <StrictMode>
          <CustomCartProvider>
            <Header />
            {children}
            <Footer />
            <SvgSprite />
            <WOWINIT />
          </CustomCartProvider>
        </StrictMode>
      </body>
    </html>
  );
}
