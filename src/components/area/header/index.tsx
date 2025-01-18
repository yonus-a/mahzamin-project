import DialogContainer from "../../general/dialog-container";
import DialogLayer from "../../general/dialog-layer";
import CartDialog from "../../general/cart-dialog";
import DialogCta from "../../general/dialog-cta";
import LoginBtn from "../../general/login-btn";
import Logo from "@components/general/logo";
import MobileOnly from "../../general/mobile-only";
import Dialog from "../../general/dialog";
import Icon from "../../general/icon";
import PcOnly from "../../general/pc-only";
import Search from "../../widgets/search";
import Nav from "../nav";
import "./style.scss";

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
            <Logo />
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
