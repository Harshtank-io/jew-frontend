import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactForm() {
  return (
    <div className="h-screen flex items-center flex-col md:flex-row max-w-6xl mx-auto p-6 gap-8">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/3 space-y-6">
        <div className="space-y-2">
          <p className="font-semibold">Chat to us</p>
          <p className="text-gray-600">Our friendly team is here to help.</p>
          <p className="text-gray-800">demo@email.com</p>
        </div>

        <div className="space-y-2">
          <p className="font-semibold">Visit us</p>
          <p className="text-gray-600">Come say hello at our office HQ.</p>
          <p className="text-gray-800 font-bold">100 Smith Street</p>
          <p className="text-gray-800">Collingwood VIC 3066 AU</p>
        </div>

        <div className="space-y-2">
          <p className="font-semibold">Call us</p>
          <p className="text-gray-600">Mon-Fri from 8am to 5pm.</p>
          <p className="text-gray-800 font-bold">+1 (555) 000-0000</p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-2/3 bg-black text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold">
          Got ideas? We’ve got the skills. Let’s team up.
        </h2>
        <p className="text-white mt-2">
          Tell us more about yourself and what you’ve got in mind.
        </p>

        <div className="mt-6 space-y-4">
          <Input type="text" placeholder="Your name" />
          <Input type="email" placeholder="you@company.com" />
          <Input type="tel" placeholder="Your phone number" />
          <Input type="text" placeholder="Brand name" />
          <Textarea placeholder="Tell us a little about the project..." />

          {/* Submit Button */}
          <Button className="w-full bg-white text-black mt-6">
            Let’s get started!
          </Button>
        </div>
      </div>
    </div>
  );
}
