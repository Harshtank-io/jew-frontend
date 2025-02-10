import Link from "next/link";
import { Linkedin, Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#14121F] text-white">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Products Section */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Products</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Jewelry
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Beauty
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skincare
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Watches
                </Link>
              </li>
            </ul>
          </div>

          {/* Integrations Section */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Integrations</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Website
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  In Store
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Branded Applications
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Social
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <div className="mb-6">
              <span className="text-2xl font-semibold">JWE-AI</span>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-gray-400">Email: </span>
                <Link
                  href="mailto:info@mirrar.com"
                  className="text-[#F41DB3] hover:text-[#F41DB3]/90"
                >
                  info@mirrar.com
                </Link>
              </div>
              <div>
                <span className="text-gray-400">Address:</span>
                <p className="text-gray-400 mt-1">
                  Edison-Corporate-Office. 515,
                  <br />
                  Plainfield Avenue, Suite 1, Edison NJ 08817
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Links */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About us
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Careers
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Webinar
            </Link>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Medium</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 text-sm text-gray-400">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span>© StyleDotMe 2023</span>
            <Link href="#" className="hover:text-white transition-colors">
              HTML sitemap
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white transition-colors">
              Terms Of Use
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
