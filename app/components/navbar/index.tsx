'use client'
import { CloseMenu,  Menu, UverusLogo } from "@/app/assets/svg";
import Link from "next/link";
import { useContext, useState } from "react";
import { Button } from "../shared/Button";
import { ScrollContext } from "@/app/contexts/scroll-context";

export const Navbar = () => {
    const [isNavOpened, setIsNavOpened] = useState(false);
    const isScrolled = useContext(ScrollContext)

  const navLinks = [
    { label: "Developers", href: "/#developers" },
    { label: "Support", href: "/#support" },
    { label: "Login", href: "/#login" },
    { label: "Create free account", href: "/#create-account" },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full py-5 transition duration-200 bg-white ${isScrolled ?"md:bg-white":"md:bg-transparent"}`}>
      <nav className="relative flex justify-between items-center h-10 w-full container mx-auto text-white">
        <Link
          href={"/"}
          className="font-bold text-sm md:text-lg uppercase flex items-center gap-1 z-50 ml-4 md:ml-10 lg:ml-20"
        >
          
          <UverusLogo />
        </Link>
        <ul className={`${isNavOpened? "translate-x-0": "-translate-x-full"} md:translate-x-0 transition duration-200 text-secondary flex flex-col md:flex-row items-center gap-14 md:gap-5 fixed md:relative top-0 left-0 pt-28 md:pt-0 pr-4 md:pr-10 lg:pr-20 w-full md:w-auto h-screen md:h-fit bg-white md:bg-transparent bg-opacity-20 md:bg-opacity-100 backdrop-blur-md md:backdrop-blur-0`}>
          {navLinks.map((link, idx) => (
            link.label === "Create free account"? <Button variant="dark" className="h-10" key={idx}>{link.label}</Button>:
            <li key={idx} onClick={()=>setIsNavOpened(!isNavOpened)} className={`${link.label === 'Login'? 'text-primary': 'text-secondary'} font-light md:font-medium text-[28px] md:text-base hover:underline underline-offset-4 transition duration-200`}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <button onClick={()=>setIsNavOpened(!isNavOpened)} className="flex md:hidden hover:scale-90 active:scale-90 transition duration-200 p-2.5 pr-6 z-50">{isNavOpened? <CloseMenu /> :<Menu />}</button>
      </nav>
    </header>
  );
};
