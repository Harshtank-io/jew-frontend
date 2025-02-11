"use client";
import { useState, useRef } from "react";
import Webcam from "react-webcam";
import { X } from "lucide-react";

const TryOnModal = ({ products, onClose }) => {
  const webcamRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-4/5 flex">
        {/* Webcam Section */}
        <div className="relative flex-1 flex flex-col items-center justify-center bg-black">
          <Webcam ref={webcamRef} className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 text-white text-lg">
            FIND A FACE
            <p className="text-sm">
              Keep a 10-inch distance for the best results.
            </p>
          </div>
        </div>

        {/* Product Sidebar */}
        <div className="w-1/3 bg-gray-100 p-4 overflow-y-auto">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Categories</h3>
            <button onClick={onClose}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="p-2 border rounded-lg cursor-pointer mb-2"
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-20 object-contain"
                />
                <p className="text-sm text-center mt-1">{product.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryOnModal;
