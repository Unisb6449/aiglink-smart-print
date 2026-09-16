import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "../assets/images/aiglink-smart-logo-new.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white">
      <nav className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src={logo}
            alt="Aiglink Smart Printing"
            className="h-auto w-[105px] object-contain sm:w-[110px] lg:w-[115px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center md:flex">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-[14px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#FE6B00]"
                      : "text-[#374151] hover:text-[#FE6B00]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Get a Quote */}
            <Link
              to="/contact"
              className="ml-2 inline-flex h-11 items-center justify-center rounded-lg bg-[#FE6B00] px-6 text-[14px] font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E86100] hover:shadow-md"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-gray-800 transition-colors hover:bg-gray-100 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-orange-50 text-[#FE6B00]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Get a Quote */}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 rounded-lg bg-[#FE6B00] px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-[#E86100]"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;