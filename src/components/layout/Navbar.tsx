"use client";

import { LogIn, Menu, Search, ShoppingCart, UserRoundPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput
} from "../ui/input-group";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "../ui/sheet";
import { useState } from "react";
import { Command, CommandDialog, CommandInput } from "../ui/command";

const NAVLINKS = [
  {
    key: "home",
    label: "Home",
    href: "/"
  },
  {
    key: "products",
    label: "Products",
    href: "/products"
  },
  {
    key: "orders",
    label: "Orders",
    href: "/orders"
  },
  {
    key: "adminm",
    label: "Admin",
    href: "/admin"
  }
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-background/50 backdrop-blur-md sticky top-0 z-50 w-full border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Side */}
        <div className="flex items-center gap-5">
          <Link href={"/"} className="flex items-center gap-3">
            <ShoppingCart />
            <h1 className="text-xl font-bold">LilPedia</h1>
          </Link>

          <div className="lg:flex items-center gap-10 hidden">
            {NAVLINKS.length > 0 &&
              NAVLINKS.map((link) => (
                <div key={link.key}>
                  <Link
                    href={link.href}
                    className={cn("hover:text-primary", {
                      "text-primary font-bold": link.href === pathname
                    })}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
          </div>
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-4">
          <InputGroup className="xl:w-80 hidden lg:flex">
            <InputGroupInput placeholder="Search products..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>

          <SearchMobile />

          <Button size="icon">
            <ShoppingCart />
          </Button>

          <NavigationSheet />

          <Link href="/login">
            <Button
              variant={"outline"}
              className="items-center gap-3 hidden lg:flex"
            >
              <LogIn />
              Sign In
            </Button>
          </Link>
          <Button className="items-center gap-3 hidden lg:flex ">
            <UserRoundPlus />
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// Others Components
const NavigationSheet = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild className="inline-block lg:hidden">
        <Button variant={"outline"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-4">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-3">
            <ShoppingCart />
            LilPedia
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-start justify-center gap-4">
          {NAVLINKS.length > 0 &&
            NAVLINKS.map((link) => (
              <div key={link.key}>
                <Link
                  href={link.href}
                  className={cn("hover:text-primary", {
                    "text-primary font-bold": link.href === pathname
                  })}
                >
                  {link.label}
                </Link>
              </div>
            ))}
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <Link href="/login" className="hover:text-primary">
            Sign In
          </Link>
          <Link href="/" className="hover:text-primary">
            Sign Up
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const SearchMobile = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button
        variant={"outline"}
        onClick={() => setOpen((prev) => !prev)}
        className="inline-block lg:hidden"
      >
        <Search />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput className="Search products..." />
        </Command>
      </CommandDialog>
    </>
  );
};
