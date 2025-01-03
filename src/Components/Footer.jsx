import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#ED3D63] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Content (Logo, Links, Contact, Socials) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Logo and About */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Marriage Bliss</h2>
              <p className="text-sm">
                Finding your soulmate made easy. Join us and explore endless possibilities to meet your perfect match.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="hover:text-gray-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-gray-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-300">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-gray-300">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Contact</h2>
              <ul className="space-y-2">
                <li>
                  <span className="block text-sm">Email: info@marriagebliss.com</span>
                </li>
                <li>
                  <span className="block text-sm">Phone: +1 (555) 123-4567</span>
                </li>
                <li>
                  <span className="block text-sm">Address: 123 Love Street, Wedding City</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content (Background Image) */}
          <div
            className="bg-cover bg-center rounded-lg w-80"
            style={{
              backgroundImage: "url('https://tse2.mm.bing.net/th?id=OIP.DE0BOthxSlV1dDsHwJ5X2wHaE7&pid=Api&P=0&h=180')", // Replace with your image URL
              height: "200px",
            }}
          >
            {/* Optional Overlay or Text */}
            <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-30 text-white text-center p-4 rounded-lg">
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <Link to="https://techxpert.in/">
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-lg text-white">
            © {new Date().getFullYear()} Designed By Techxpert.
          </p>
        </div>
        </Link>
      </div>
    </footer>
  );
}
