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

// Categorized Products data
const categorizedProducts = {
  earrings: [
    {
      id: 1,
      name: "Earrings - 1",
      code: "Earrings-83868",
      image: "/images/earring/earring1.jpg",
      price: "$5,999",
    },
    {
      id: 2,
      name: "Green Cushion Cut Earrings",
      code: "3D-Graff-ear",
      image: "/images/earring/earring2.jpg",
      price: "$4,299",
    },
    {
      id: 3,
      name: "Ruby Diamond Chandelier",
      code: "216-Y2626e",
      image: "/images/earring/earring3.png",
      price: "$7,899",
    },
    {
      id: 4,
      name: "Sapphire Drop Earrings",
      code: "DSC_9065-original",
      image: "/images/earring/earring4.png",
      price: "$3,999",
    },
  ],

  bracelets: [
    {
      id: 5,
      name: "Gold Bangle Bracelet",
      code: "Bracelet-33890",
      image: "/images/bracelet/bracelet1.png",
      price: "$2,499",
    },
    {
      id: 6,
      name: "Silver Cuff Bracelet",
      code: "Bracelet-49302",
      image: "/images/bracelet/bracelet2.png",
      price: "$1,799",
    },
  ],

  necklaces: [
    {
      id: 7,
      name: "Diamond Pendant Necklace",
      code: "Necklace-28283",
      image: "/images/necklace/necklace1.png",
      price: "$4,499",
    },
    {
      id: 8,
      name: "Gold Chain Necklace",
      code: "Necklace-72737",
      image: "/images/necklace/necklace2.png",
      price: "$2,199",
    },
  ],

  sets: [
    {
      id: 9,
      name: "Diamond Jewelry Set",
      code: "Set-13492",
      image: "/images/set/set1.png",
      price: "$12,499",
    },
  ],

  rings: [
    {
      id: 10,
      name: "Emerald Engagement Ring",
      code: "Ring-19283",
      image: "/images/ring/ring1.png",
      price: "$9,999",
    },
    {
      id: 11,
      name: "Gold Wedding Ring",
      code: "Ring-23983",
      image: "/images/ring/ring2.png",
      price: "$3,499",
    },
  ],
};

const categories = ["earrings", "necklaces", "rings", "bracelets", "sets"];

export default function Page() {
  const [isTryOnModalOpen, setIsTryOnModalOpen] = useState(false); // State for TryOnModal
  const [activeCategory, setActiveCategory] = useState("earrings"); // Default active category

  // Get the products for the selected category
  const products = categorizedProducts[activeCategory];

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
        <Tabs defaultValue="earrings">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="px-4 py-2"
                onClick={() => setActiveCategory(category)} // Update active category
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
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
