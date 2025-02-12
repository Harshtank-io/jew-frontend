"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ContactModal from "./contact-model";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const router = useRouter();

  const handlePush = () => {
    router.push("/products");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#14121F]">
      <div className="container flex h-[72px] items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-semibold text-white">JWE-AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-normal text-white bg-transparent hover:bg-transparent hover:text-white/90 focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] bg-white">
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        Industry 1
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* Other Navigation Menu Items... */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="secondary"
            className="h-10 px-6 rounded-md bg-white text-black hover:bg-white/90 font-medium"
            onClick={handlePush}
          >
            Try Demo
          </Button>
          <ContactModal />
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 px-2"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-black border-none text-white"
            >
              <nav className="flex flex-col gap-6 mt-8">
                <Link
                  href="#"
                  className="text-lg font-normal text-white hover:text-white/90"
                  onClick={() => setIsOpen(false)}
                >
                  Industries
                </Link>
                {/* Other Links */}
                <div className="flex flex-col gap-3 mt-4">
                  <Button
                    variant="secondary"
                    className="h-10 px-6 rounded-md bg-white text-[#6E2DFA] hover:bg-white/90 font-medium w-full"
                    onClick={handlePush} // Open TryOnModal on mobile too
                  >
                    Try Demo
                  </Button>
                  <ContactModal />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
