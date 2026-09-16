import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaFacebookF,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import logo from "../assets/images/aiglink-logo-new.PNG";

function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Digital Printing",
    "Large Format Printing",
    "Car Branding",
    "Custom Apparel",
    "Frames",
    "Promotional Products",
  ];

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-14 sm:px-8 lg:px-12 lg:py-18">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <img
                src={logo}
                alt="Aiglink Smart Printing"
                className="h-20 w-20 object-contain"/>
            </Link>

            <p className="mt-5 max-w-[320px] text-sm leading-7 text-gray-400">
              Bringing your ideas to life through quality printing and
              professional branding solutions that help businesses stand out.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/2349114301414"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-200 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white">
                <FaWhatsapp size={18} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/aiglink_smart_printing?stkn=eHVya2dmbXQxdTls"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-200 hover:border-[#FE6B00] hover:bg-[#FE6B00] hover:text-black">
                <FaInstagram size={17} />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@aiglink.smart.print?_r=1&_t=ZS-99atWGI7O5N"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-200 hover:border-[#FE6B00] hover:bg-[#FE6B00] hover:text-black">
                <FaTiktok size={16} />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/19chhdtdMy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-200 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white">
                <FaFacebookF size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-[#FE6B00]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Our Services
            </h3>

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-[#FE6B00]">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white">Contact Us</h3>

            <div className="mt-6 space-y-5">
              {/* Phone */}
              <a
                href="tel:+2348073400086"
                className="group flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FE6B00]/10 text-[#FE6B00]">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">Call Us</p>
                  <p className="mt-1 text-sm text-gray-300 transition-colors group-hover:text-[#FE6B00]">
                    +234 807 340 0086
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2349114301414"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
                  <FaWhatsapp size={18} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">WhatsApp</p>
                  <p className="mt-1 text-sm text-gray-300 transition-colors group-hover:text-[#25D366]">
                    Chat with us
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:aiglinksmartprinting@gmail.com"
                className="group flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FE6B00]/10 text-[#FE6B00]">
                  <Mail size={17} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="mt-1 break-all text-sm text-gray-300 transition-colors group-hover:text-[#FE6B00]">
                    aiglinksmartprinting@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FE6B00]/10 text-[#FE6B00]">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="mt-1 text-sm leading-6 text-gray-300">
                    44, Idiroko Road,
                    <br />
                    God Grace Building,
                    <br />
                    Sango Ota, Ogun State.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">
              Ready to bring your brand to life?
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Let’s create something amazing together.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#FE6B00] transition-colors hover:text-white">
            Get a Quote
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-6 py-5 text-center lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:text-left">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Aiglink Smart Printing. All rights
            reserved.
          </p>

          <p className="text-xs text-gray-500">
            Quality Printing. Creative Branding.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;