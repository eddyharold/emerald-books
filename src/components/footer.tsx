import Link from "next/link";
import { Facebook, Twitter, Linkedin, SendHorizonal } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="py-8 lg:py-16 bg-brand-800 text-muted lg:text-lg">
      <div className="container space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <Link href="/" className="text-3xl lg:text-4xl font-bold font-recoleta">
              Emerald Books
            </Link>

            <div className="relative w-full max-w-5xl">
              <div className="absolute right-1 rounded-md top-1/2 -translate-y-1/2 text-muted-foreground hover:bg-primary hover:text-white duration-75 p-2">
                <SendHorizonal className="h-4 w-4" />
              </div>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="Join our newsletter"
                className="pr-10 h-12 lg:h-10 bg-background text-foreground border-none focus-visible:shadow-md"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <nav className="flex space-x-4 mb-4 md:mb-0">
              <Link href="#about" className="hover:text-emerald-300">
                About Us
              </Link>
              <Link href="#products" className="hover:text-emerald-300">
                Products
              </Link>
              <Link href="#services" className="hover:text-emerald-300">
                Services
              </Link>
            </nav>

            <div className="text-sm hidden md:block text-center">
              <p>&copy; {new Date().getFullYear()} Emerald Books. All rights reserved.</p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-emerald-300">
              <Facebook />
            </a>
            <a href="#" className="hover:text-emerald-300">
              <Twitter />
            </a>
            <a href="#" className="hover:text-emerald-300">
              <Linkedin />
            </a>
          </div>
        </div>
        <div className="text-center text-sm block md:hidden">
          <p>&copy; {new Date().getFullYear()} Emerald Books. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
