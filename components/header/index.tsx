import DialogContainer from "../dialog-container";
import DialogLayer from "../dialog-layer";
import MobileOnly from "../mobile-only";
import CartDialog from "../cart-dialog";
import DialogCta from "../dialog-cta";
import LoginBtn from "../login-btn";
import PcOnly from "../pc-only";
import Image from "next/image";
import Search from "../search";
import Dialog from "../dialog";
import Link from "next/link";
import Nav from "../nav";
import "./style.scss";
import Icon from "@components/icon";

export default function Header() {
  const variants = {
    initial: { x: 100 },
    animate: { x: 0 },
  };

  return (
    <header>
      <div className="header-wrapper">
        <div className="col-right">
          <MobileOnly>
            <Dialog ariaLabel="Navigation">
              <DialogCta className="menu-cta">
                <Icon name="menu" title="open Navigation" />
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
                alt="ماه ززمین"
                width={65}
                height={65}
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
