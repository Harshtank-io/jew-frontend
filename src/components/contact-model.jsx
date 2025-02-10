import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-10 px-6 rounded-md bg-white text-black hover:bg-white/90 font-medium">
          Contact Us
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md p-6 bg-white rounded-lg">
        <h2 className="text-xl font-semibold text-center mb-4">
          Leave Your Email To Get Started
        </h2>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="first-name">First Name</Label>
              <Input
                id="first-name"
                placeholder="eg. John Doe"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="contact-number">Contact Number</Label>
              <Input
                id="contact-number"
                placeholder="+91-XXXXXXXXXX"
                className="mt-1"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Work Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="eg. abc@company.com"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="brand-name">Brand Name</Label>
              <Input id="brand-name" placeholder="eg. Brand" className="mt-1" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="recaptcha" />
            <Label htmlFor="recaptcha">I'm not a robot</Label>
          </div>
          <Button className="w-full bg-black text-white hover:bg-gray-800">
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
