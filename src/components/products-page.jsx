"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronLeft,
  ChevronRight,
  Gem,
  Palette,
  Glasses,
  Watch,
  Scan,
} from "lucide-react";
import { useState } from "react";
import TryOnModal from "./try-on-modal";

const products = [
  {
    id: 1,
    name: "Emerald Diamond Drop Earrings",
    code: "Earrings-83868",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=60",
    price: "$5,999",
  },
  {
    id: 2,
    name: "Green Cushion Cut Earrings",
    code: "3D-Graff-ear",
    image:
      "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800&auto=format&fit=crop&q=60",
    price: "$4,299",
  },
  {
    id: 3,
    name: "Ruby Diamond Chandelier",
    code: "216-Y2626e",
    image:
      "https://images.unsplash.com/photo-1586104195538-050b9f74f58b?w=800&auto=format&fit=crop&q=60",
    price: "$7,899",
  },
  {
    id: 4,
    name: "Sapphire Drop Earrings",
    code: "DSC_9065-original",
    image:
      "https://images.unsplash.com/photo-1635767798638-3665a25be4bb?w=800&auto=format&fit=crop&q=60",
    price: "$3,999",
  },
  {
    id: 5,
    name: "Diamond Stud Earrings",
    code: "E0001306163",
    image:
      "https://images.unsplash.com/photo-1633810542706-90e5ff7557be?w=800&auto=format&fit=crop&q=60",
    price: "$2,499",
  },
  {
    id: 6,
    name: "Crystal Chandelier Earrings",
    code: "ER2",
    image:
      "https://images.unsplash.com/photo-1602752250015-52934bc45613?w=800&auto=format&fit=crop&q=60",
    price: "$6,299",
  },
];

const categories = ["Earrings", "Necklaces", "Rings", "Bracelets", "Sets"];

export default function Page() {
  const [isTryOnModalOpen, setIsTryOnModalOpen] = useState(false); // State for TryOnModal

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main Navigation */}
      <nav className="flex justify-center gap-8 mb-8 overflow-x-auto pb-4">
        <Button variant="ghost" className="flex items-center gap-2">
          <Gem className="h-5 w-5" />
          Jewelry
        </Button>
        <Button variant="ghost" className="flex items-center gap-2">
          <Palette className="h-5 w-5" />
          Beauty
        </Button>
        <Button variant="ghost" className="flex items-center gap-2">
          <Glasses className="h-5 w-5" />
          Eyewear
        </Button>
        <Button variant="ghost" className="flex items-center gap-2">
          <Watch className="h-5 w-5" />
          Watches
        </Button>
        <Button variant="ghost" className="flex items-center gap-2">
          <Scan className="h-5 w-5" />
          Skin Analysis
        </Button>
      </nav>

      {/* Category Navigation */}
      <div className="flex items-center justify-center gap-4 mb-12 overflow-x-auto">
        <Button variant="ghost" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Tabs defaultValue="Earrings">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="px-4 py-2"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <Button variant="ghost" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="group">
            <CardContent className="p-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Quick View
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center gap-2 p-4">
              <h3 className="font-medium text-sm">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.code}</p>
              <p className="text-sm font-semibold">{product.price}</p>
              <Button
                variant="default"
                className="w-32"
                onClick={() => setIsTryOnModalOpen(true)}
              >
                Try On
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {isTryOnModalOpen && (
        <TryOnModal
          products={products}
          onClose={() => setIsTryOnModalOpen(false)} // Close modal
        />
      )}
    </div>
  );
}
