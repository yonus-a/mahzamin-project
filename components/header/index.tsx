import Link from "next/link";
import Image from "next/image";
import Search from "../search";
import Nav from "../nav";
import Dialog from "../dialog";
import DialogCta from "../dialog-cta";
import DialogContainer from "../dialog-container";
import DialogLayer from "@components/dialog-layer";
import MobileOnly from "@components/mobile-only";
import PcOnly from "@components/pc-only";
import LoginBtn from "@components/login-btn";
import "./style.scss";
import CartDialog from "@components/cart-dialog";

export default function Header() {
  const variants = {
    initial: { x: 100 },
    animate: { x: 0 },
  };

  return (
    <header>
      <div className="header-container">
        <div className="col-right">
          <MobileOnly>
            <Dialog ariaLabel="Navigation">
              <DialogCta className="menu-cta">
                <svg>
                  <title>open Navigation</title>
                  <use href="#menu" />
                </svg>
              </DialogCta>
              <DialogLayer>
                <DialogContainer variants={variants} takeAllSpace kickOff>
                  <Nav />
                </DialogContainer>
              </DialogLayer>
            </Dialog>
          </MobileOnly>
          <PcOnly>
            <Link href="/" className="logo">
              <Image
                src="/images/logo.png"
                width={65}
                height={65}
                alt="ماه ززمین"
              />
            </Link>
            <Nav />
          </PcOnly>
        </div>
        <div className="col-left">
          <Search />
          <LoginBtn />
          <CartDialog />
        </div>
      </div>
    </header>
  );
}
