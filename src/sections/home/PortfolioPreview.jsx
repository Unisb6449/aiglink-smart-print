import { ArrowRight, ExternalLink } from "lucide-react";

import { Link } from "react-router-dom";

const aiglinkImage =
  "https://res.cloudinary.com/regrxhop/image/upload/v1789676656/Aiglink.png";

const digitalPrintingImage =
  "https://res.cloudinary.com/regrxhop/image/upload/v1789676774/Digital-Printing.png";

const Promotional2 =
  "https://res.cloudinary.com/regrxhop/image/upload/v1789677195/Promotional2.png";

const projects = [
  {
    title: "Corporate Branding",
    category: "Brand Identity",
    image: aiglinkImage,
  },

  {
    title: "Premium Business Prints",
    category: "Digital Printing",
    image: digitalPrintingImage,
  },

  {
    title: "Creative Brand Materials",
    category: "Creative Branding",
    image: Promotional2,
  },
];

function PortfolioPreview() {
  return (
    <section className="bg-[#F8F9FA] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        {/* Section Header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[650px]">
            <p className="text-xs font-semibold uppercase tracking-[2px] text-[#FE6B00]">
              Our Portfolio
            </p>

            <h2 className="mt-3 text-[32px] font-bold leading-[1.1] tracking-[-1px] text-black sm:text-[38px] lg:text-[44px]">
              Work That Speaks
              <br />
              for Itself
            </h2>

            <p className="mt-4 max-w-[590px] text-[14px] leading-7 text-[#5B6470] sm:text-[15px]">
              Explore some of our recent printing and branding projects
              created to help businesses communicate their ideas with
              confidence.
            </p>
          </div>

          {/* Desktop CTA */}
          <Link
            to="/portfolio"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-black transition-colors duration-200 hover:text-[#FE6B00] md:inline-flex"
          >
            View All Projects
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Portfolio Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[18px] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]"
            >
              {/* Image */}
              <div className="relative h-[250px] overflow-hidden sm:h-[270px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />

                {/* View Icon */}
                <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ExternalLink size={17} className="text-black" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[1.2px] text-[#FE6B00]">
                  {project.category}
                </p>

                <h3 className="mt-2 text-[18px] font-semibold text-black">
                  {project.title}
                </h3>

                <Link
                  to="/portfolio"
                  className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-black transition-all duration-200 group-hover:gap-3 group-hover:text-[#FE6B00]"
                >
                  View Project
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors duration-200 hover:text-[#FE6B00]"
          >
            View All Projects
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PortfolioPreview;