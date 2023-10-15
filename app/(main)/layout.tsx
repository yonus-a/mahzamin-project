import CustomCartProvider from "@components/custom-cart-provider";
import WOWINIT from "@components/WOWINIT";
import Header from "@components/header";
import Footer from "@components/footer";

// import swiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "swiper/css/autoplay";

// import animate.css
import "animate.css";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <CustomCartProvider>
      <Header />
      {children}
      <Footer />
      <WOWINIT />
    </CustomCartProvider>
  );
}
