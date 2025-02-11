// "use client";

// import * as React from "react";
// import Link from "next/link";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Menu } from "lucide-react";
// import ContactModal from "./contact-model";

// export default function Header() {
//   const [isOpen, setIsOpen] = React.useState(false);

//   return (
//     <header className="sticky top-0 z-50 w-full bg-[#14121F]">
//       <div className="container flex h-[72px] items-center justify-between px-4 md:px-8">
//         <div className="flex items-center">
//           <Link href="/" className="flex items-center">
//             <span className="text-2xl font-semibold text-white">JWE-AI</span>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex md:flex-1 md:justify-center">
//           <NavigationMenu>
//             <NavigationMenuList className="gap-8">
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="text-base font-normal text-white bg-transparent hover:bg-transparent hover:text-white/90 focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
//                   Industries
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <div className="grid gap-3 p-6 w-[400px] bg-white">
//                     <NavigationMenuLink asChild>
//                       <Link
//                         href="#"
//                         className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                       >
//                         Industry 1
//                       </Link>
//                     </NavigationMenuLink>
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="text-base font-normal text-white bg-transparent hover:bg-transparent hover:text-white/90 focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
//                   Integration
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <div className="grid gap-3 p-6 w-[400px] bg-white">
//                     {/* Add integration content */}
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="text-base font-normal text-white bg-transparent hover:bg-transparent hover:text-white/90 focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
//                   Resources
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <div className="grid gap-3 p-6 w-[400px] bg-white">
//                     {/* Add resources content */}
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="text-base font-normal text-white bg-transparent hover:bg-transparent hover:text-white/90 focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
//                   Know More
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <div className="grid gap-3 p-6 w-[400px] bg-white">
//                     {/* Add know more content */}
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>

//         {/* Desktop CTA Buttons */}
//         <div className="hidden md:flex items-center gap-4">
//           <Button
//             variant="secondary"
//             className="h-10 px-6 rounded-md bg-white text-black hover:bg-white/90 font-medium"
//           >
//             Try Demo
//           </Button>
//           <ContactModal />

//           {/* <Button
//             variant="secondary"
//             className="h-10 px-6 rounded-md bg-white text-black hover:bg-white/90 font-medium"
//           >
//             Contact Us
//           </Button> */}
//         </div>

//         {/* Mobile Menu */}
//         <div className="flex md:hidden">
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild>
//               <Button
//                 variant="ghost"
//                 className="text-white hover:bg-white/10 px-2"
//               >
//                 <Menu className="h-6 w-6" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent
//               side="right"
//               className="w-[300px] bg-black border-none text-white"
//             >
//               <nav className="flex flex-col gap-6 mt-8">
//                 <Link
//                   href="#"
//                   className="text-lg font-normal text-white hover:text-white/90"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Industries
//                 </Link>
//                 <Link
//                   href="#"
//                   className="text-lg font-normal text-white hover:text-white/90"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Integration
//                 </Link>
//                 <Link
//                   href="#"
//                   className="text-lg font-normal text-white hover:text-white/90"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Resources
//                 </Link>
//                 <Link
//                   href="#"
//                   className="text-lg font-normal text-white hover:text-white/90"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Know More
//                 </Link>
//                 <div className="flex flex-col gap-3 mt-4">
//                   <Button
//                     variant="secondary"
//                     className="h-10 px-6 rounded-md bg-white text-[#6E2DFA] hover:bg-white/90 font-medium w-full"
//                   >
//                     Try Demo
//                   </Button>
//                   {/* <Button
//                     variant="secondary"
//                     className="h-10 px-6 rounded-md bg-white text-[#6E2DFA] hover:bg-white/90 font-medium w-full"
//                   >
//                     Contact Us
//                   </Button> */}
//                   <ContactModal />
//                 </div>
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }

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
import TryOnModal from "./try-on-modal"; // Import TryOnModal

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isTryOnModalOpen, setIsTryOnModalOpen] = React.useState(false); // State for TryOnModal

  const products = [
    { name: "Product 1", image: "/path/to/image1.jpg" },
    { name: "Product 2", image: "/path/to/image2.jpg" },
    // Add more products as needed
  ];

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
            onClick={() => setIsTryOnModalOpen(true)} // Open TryOnModal on click
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
                    onClick={() => setIsTryOnModalOpen(true)} // Open TryOnModal on mobile too
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

      {/* TryOnModal */}
      {isTryOnModalOpen && (
        <TryOnModal
          products={products}
          onClose={() => setIsTryOnModalOpen(false)} // Close modal
        />
      )}
    </header>
  );
}
