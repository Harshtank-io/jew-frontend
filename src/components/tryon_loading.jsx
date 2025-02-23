import Link from "next/link";
import { Lamp } from "lucide-react";

export default function VirtualTryOn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-8 bg-white text-center">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
        Unfold the Magic of Virtual Try-on
      </h1>

      <div className="w-20 h-20 flex items-center justify-center">
        <Lamp className="w-16 h-16 text-gray-800" />
      </div>

      <p className="max-w-md text-gray-600 text-lg">
        To achieve the best results when virtually trying on, keep a 10-inch
        distance, and ensure clear visibility!
      </p>

      <div className="flex space-x-2">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === 0 ? "bg-gray-300" : "bg-gray-800"
            }`}
          />
        ))}
      </div>

      <p className="text-gray-800 italic">Getting ready (100%)</p>

      <div className="text-sm text-gray-500">
        By continuing, you agree to the{" "}
        <Link href="/privacy" className="text-primary hover:underline">
          privacy policy
        </Link>{" "}
        and{" "}
        <Link href="/terms" className="text-primary hover:underline">
          terms of use
        </Link>
      </div>
    </div>
  );
}
