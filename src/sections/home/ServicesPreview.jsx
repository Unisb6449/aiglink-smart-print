import {
  Printer,
  Monitor,
  Car,
  Shirt,
  Frame,
  Gift,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const services = [
  {
    icon: Printer,
    title: "Digital Printing",
    description:
      "High-quality digital printing for business documents, flyers, brochures, and more.",
  },

  {
    icon: Monitor,
    title: "Large Format Printing",
    description:
      "Professional banners, posters, backdrops, and other large-format printing solutions.",
  },

  {
    icon: Car,
    title: "Car Branding",
    description:
      "Transform your vehicles into powerful mobile advertisements with professional branding.",
  },

  {
    icon: Shirt,
    title: "Custom Apparel",
    description:
      "Quality custom printing on shirts, uniforms, and promotional clothing.",
  },

  {
    icon: Frame,
    title: "Frames",
    description:
      "Beautiful formal, frameless, and acrylic frame solutions designed to preserve your memories, artwork, and special moments.",
  },

  {
    icon: Gift,
    title: "Promotional Products",
    description:
      "Branded promotional items designed to increase your business visibility.",
  },
];

function ServicesPreview() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        {/* Section Header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[650px]">
            <p className="text-xs font-semibold uppercase tracking-[2px] text-[#FE6B00]">
              Our Services
            </p>

            <h2 className="mt-3 text-[32px] font-bold leading-[1.1] tracking-[-1px] text-black sm:text-[38px] lg:text-[44px]">
              Printing & Branding
              <br />
              Solutions for Your Business
            </h2>

            <p className="mt-4 max-w-[590px] text-[14px] leading-7 text-[#5B6470] sm:text-[15px]">
              From everyday business printing to complete branding solutions,
              we provide professional services designed to make your business
              stand out.
            </p>
          </div>

          {/* Desktop CTA */}
          <Link
            to="/services"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-black transition-colors duration-200 hover:text-[#FE6B00] md:inline-flex"
          >
            Explore All Services
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-[18px] border border-gray-100 bg-white p-6 shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FE6B00]/20 hover:shadow-[0_15px_35px_rgba(0,0,0,0.10)] sm:p-7">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E5] transition-colors duration-300 group-hover:bg-[#FE6B00]">
                  <Icon
                    size={23}
                    strokeWidth={2}
                    className="text-[#FE6B00] transition-colors duration-300 group-hover:text-black"/>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-[17px] font-semibold text-black">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-[13px] leading-6 text-[#6B7280] sm:text-[14px]">
                  {service.description}
                </p>

                {/* Learn More */}
                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#FE6B00] transition-all duration-200 group-hover:gap-3">
                  Learn More
                  <ArrowRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors duration-200 hover:text-[#FE6B00]">
            Explore All Services
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;