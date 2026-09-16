import { ArrowRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="rounded-[24px] bg-black px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-20 lg:py-20">
          {/* Content */}
          <div className="mx-auto max-w-[760px]">
            <p className="text-xs font-semibold uppercase tracking-[2px] text-[#FE6B00]">
              Let’s Work Together
            </p>

            <h2 className="mt-4 text-[32px] font-bold leading-[1.1] tracking-[-1px] text-white sm:text-[40px] lg:text-[48px]">
              Ready to Bring Your{" "}
              <span className="text-[#FE6B00]">Ideas to Life?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-[650px] text-[14px] leading-7 text-gray-400 sm:text-[15px]">
              Whether you need professional printing, creative branding,
              Frame, custom apparel, or promotional products, we’re ready
              to help bring your vision to life.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* Get a Quote */}
            <Link
              to="/contact"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#FE6B00] px-6 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E86100] hover:shadow-lg sm:w-auto">
              Get a Quote
              <ArrowRight size={17} />
            </Link>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2349114301414?text=Hello%20Aiglink%2C%20I%20would%20like%20to%20make%20an%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-6 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] sm:w-auto">
              <FaWhatsapp size={19} />
              WhatsApp
            </a>

            {/* Phone */}
            <a
              href="tel:+2348073400086"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-6 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-black sm:w-auto">
              <Phone size={18} />
              Call Us
            </a>
          </div>

          {/* Contact Detail */}
          <div className="mt-7 flex flex-col items-center justify-center gap-2 text-xs text-gray-500 sm:flex-row sm:gap-4">
            <span>+234 807 340 0086</span>

            <span className="hidden sm:block">•</span>

            <span>Available for your next project</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;