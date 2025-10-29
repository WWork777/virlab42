import { Mail, Phone, Menu, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Burger } from "./partials/burger/burger";
import Consult from "./partials/consult/consult";
import Navbar from "./partials/navbar/navbar";

const Header = () => {
  return (
    <header className="header bg-bg_color fixed w-full z-[100]">
      <div className="container  py-3  flex  items-center">
        <Link href={"/"}>
          <h1 className="text-accent_color text-4xl font-[700] cormorant-garamond-bold">
            VIRLAB
          </h1>
        </Link>
        <div className="header__nav-wpapper ml-auto  flex-col gap-y-4 hidden md:flex ">
          <div className="header__nav-top flex items-center gap-3">
            <Link
              className="text-accent_color flex items-center gap-1 text-[14px]"
              href={"tel:79994316266"}
            >
              <Phone size={18} color="#968c76" />
              +7 (999) 431-62-66
            </Link>
            <Link
              className="text-accent_color flex items-center gap-1 text-[14px]"
              href={"mailto:pavel-sakne@yandex.ru"}
            >
              <Mail color="#968c76" size={18} />
              pavel-sakne@yandex.ru
            </Link>
            <Link
              className="text-accent_color flex items-center gap-1 text-[14px]"
              href={"https://t.me/Pavelvrl"}
            >
              <MessageCircle color="#968c76" size={18} />
              Связаться
            </Link>
          </div>
          <div className="nav header__nav-bottom">
            <Navbar />
          </div>
        </div>
        <Burger />
      </div>
    </header>
  );
};

export default Header;
