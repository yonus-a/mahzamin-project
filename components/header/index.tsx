import Link from "next/link";
import Image from "next/image";
import Search from "../search";
import Button from "../button";
import Nav from "../nav";
import "./style.scss";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="col-right">
          <Button
            className="menu-cta"
            aria-expanded="false"
            aria-label="Open Menu"
            aria-controls="main_nav"
          >
            <svg>
              <use href="#menu" />
            </svg>
          </Button>
          <Link href="/" className="logo">
            <Image
              src="/images/logo.png"
              width={75}
              height={75}
              alt="mahzamin"
            />
          </Link>
          <Nav />
        </div>
        <div className="col-left">
          <Search />
          <Link href="/login" className="login">
            ورود/ثبت نام
          </Link>
          <Link href="/cart" className="cart">
            <svg>
              <title>shopping cart</title>
              <use href="#shopping-cart" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
