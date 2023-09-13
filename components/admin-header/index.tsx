import Link from "next/link";
import AdminNav from "@components/admin-nav";
import PcOnly from "@components/pc-only";
import MobileOnly from "@components/mobile-only";
import Dialog from "@components/dialog";
import DialogCta from "@components/dialog-cta";
import DialogContainer from "@components/dialog-container";
import "./style.scss";

export default function AdminHeader() {
  return (
    <header className="admin-header">
      <div className="admin-header-container">
        <PcOnly>
          <Link href="/" className="logout">
            <svg>
              <title>logout</title>
              <use href="#logout" />
            </svg>
          </Link>
          <AdminNav />
        </PcOnly>
        <MobileOnly>
          <Dialog ariaLabel="admin-nav">
            <DialogCta>
              <svg>
                <title>Open Navigation</title>
                <use href="#menu" />
              </svg>
            </DialogCta>
            <DialogContainer>
              <DialogCta>
                <svg>
                  <title>Close Navigation</title>
                  <use href="#close" />
                </svg>
              </DialogCta>
              <AdminNav />
              <Link href="/" className="logout">
                <svg>
                  <title>logout</title>
                  <use href="#logout" />
                </svg>
              </Link>
            </DialogContainer>
          </Dialog>
        </MobileOnly>
      </div>
    </header>
  );
}
