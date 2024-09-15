import Link from "next/link";

import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/components/icons/logo-icon";
import { Navigation } from "./navigation";
import { NavigationItem } from "./navigation-item";

export function Navbar() {
  return (
    <nav className="container py-5 flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <Button
          size="icon"
          className="text-zinc-700 bg-transparent hover:bg-zinc-100"
        >
          <GrFacebookOption size={16} />
        </Button>
        <Button
          size="icon"
          className="text-zinc-700 bg-transparent hover:bg-zinc-100"
        >
          <FaInstagram size={16} />
        </Button>
      </div>

      <Navigation>
        <NavigationItem href="#">Home</NavigationItem>
        <NavigationItem href="#">Serviços</NavigationItem>
        <NavigationItem href="#">
          <LogoIcon />
        </NavigationItem>
        <NavigationItem href="#">Sobre nós</NavigationItem>
        <NavigationItem href="#">Contacte-nos</NavigationItem>
      </Navigation>

      <div className="flex items-center gap-x-3">
        <Button
          size="icon"
          className="text-zinc-700 bg-transparent hover:bg-zinc-100"
        >
          <LuShoppingBag size={16} />
        </Button>
        <Button
          size="icon"
          className="text-zinc-700 bg-transparent hover:bg-zinc-100"
        >
          <IoSearchSharp size={16} />
        </Button>
      </div>
    </nav>
  );
}
