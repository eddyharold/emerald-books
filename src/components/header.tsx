"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-background/70 backdrop-blur-sm sticky top-0 z-20 shadow">
      <div className="container py-5 flex items-center justify-between">
        <Link href="/">
          <Image src="/assets/images/logo.png" width={400} height={400} alt="Emerald Books" priority className="w-16" />
        </Link>

        <div>
          <nav className="space-x-8 text-base font-semibold hidden md:inline-flex">
            <Link
              href={pathname === "/" ? "#about" : "/#about"}
              className="hover:text-primary hover:scale-110 transition-all duration-100"
            >
              About Us
            </Link>
            <Link
              href={pathname === "/" ? "#products" : "/#products"}
              className="hover:text-primary hover:scale-110 transition-all duration-100"
            >
              Collections
            </Link>
            <Link
              href={pathname === "/" ? "#services" : "/#services"}
              className="hover:text-primary hover:scale-110 transition-all duration-100"
            >
              Sevices
            </Link>
          </nav>

          <Sheet>
            <SheetTrigger className="inline-flex md:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent className="w-full">
              <SheetHeader>
                <SheetTitle className="text-left font-recoleta text-brand-950 text-2xl">Emerald Books</SheetTitle>
                <SheetDescription className="py-6">
                  <nav className="flex flex-col items-start gap-6 text-base font-medium">
                    <Link
                      href={pathname === "/" ? "#about" : "/#about"}
                      className="hover:text-primary hover:scale-110 transition-all duration-100"
                    >
                      About Us
                    </Link>
                    <Link
                      href={pathname === "/" ? "#products" : "/#products"}
                      className="hover:text-primary hover:scale-110 transition-all duration-100"
                    >
                      Our Collections
                    </Link>
                    <Link
                      href={pathname === "/" ? "#services" : "/#services"}
                      className="hover:text-primary hover:scale-110 transition-all duration-100"
                    >
                      Our Sevices
                    </Link>
                    <ButtonLink
                      href={pathname === "/" ? "#contact" : "/#contact"}
                      className="rounded-full text-base w-full gap-x-2"
                    >
                      Get In Touch
                      <Phone />
                    </ButtonLink>
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <ButtonLink
          href={pathname === "/" ? "#contact" : "/#contact"}
          className="rounded-full text-base hidden md:inline-flex gap-x-2"
        >
          Get In Touch
          <Phone />
        </ButtonLink>
      </div>
    </header>
  );
}
