import React from "react";

function Services() {
  return (
    <>
      {/* Services */}
      <section className="bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          {/* Section Header */}
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-[650px]">
              <p className="text-xs font-semibold uppercase tracking-[2px] text-[#FE6B00]">
                What We Offer
              </p>

              <h2 className="mt-3 text-[36px] font-bold leading-tight tracking-[-1.2px] text-black sm:text-[44px] lg:text-[50px]">
                Printing & Branding
                <br />
                <span className="text-[#FE6B00]">
                  Solutions for Every Need.
                </span>
              </h2>
            </div>

            <p className="max-w-[440px] text-[14px] leading-6 text-[#5B6470] sm:text-[15px]">
              From everyday business essentials to large-scale branding
              projects, we deliver quality printing solutions designed to make
              your brand stand out.
            </p>
          </div>

          {/* Service Cards */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Digital Printing */}
            <div className="group rounded-[20px] border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FE6B00] hover:shadow-lg sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E5] text-[#FE6B00]">
                <span className="text-xl">▣</span>
              </div>

              <h3 className="mt-6 text-[21px] font-semibold text-black">
                Digital Printing
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-[#5B6470]">
                High-quality digital printing for business documents, flyers,
                brochures, business cards, and more.
              </p>

              <button
                type="button"
                className="mt-6 text-sm font-semibold text-[#FE6B00] transition-colors hover:text-black"
              >
                Learn More →
              </button>
            </div>

            {/* Large Format Printing */}
            <div className="group rounded-[20px] border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FE6B00] hover:shadow-lg sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E5] text-[#FE6B00]">
                <span className="text-xl">▤</span>
              </div>

              <h3 className="mt-6 text-[21px] font-semibold text-black">
                Large Format Printing
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-[#5B6470]">
                Professional banners, posters, backdrops, roll-ups, and other
                large-format printing solutions.
              </p>

              <button
                type="button"
                className="mt-6 text-sm font-semibold text-[#FE6B00] transition-colors hover:text-black"
              >
                Learn More →
              </button>
            </div>

            {/* Car Branding */}
            <div className="group rounded-[20px] border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FE6B00] hover:shadow-lg sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E5] text-[#FE6B00]">
                <span className="text-xl">▱</span>
              </div>

              <h3 className="mt-6 text-[21px] font-semibold text-black">
                Car Branding
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-[#5B6470]">
                Transform your vehicles into powerful mobile advertisements
                with professional branding.
              </p>

              <button
                type="button"
                className="mt-6 text-sm font-semibold text-[#FE6B00] transition-colors hover:text-black"
              >
                Learn More →
              </button>
            </div>

            {/* Custom Apparel */}
            <div className="group rounded-[20px] border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FE6B00] hover:shadow-lg sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E5] text-[#FE6B00]">
                <span className="text-xl">◇</span>
              </div>

              <h3 className="mt-6 text-[21px] font-semibold text-black">
                Custom Apparel
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-[#5B6470]">
                Quality custom printing on shirts, uniforms, caps, and
                promotional clothing.
              </p>

              <button
                type="button"
                className="mt-6 text-sm font-semibold text-[#FE6B00] transition-colors hover:text-black"
              >
                Learn More →
              </button>
            </div>

            {/* Frames */}
            <div className="group rounded-[20px] border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FE6B00] hover:shadow-lg sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E5] text-[#FE6B00]">
                <span className="text-xl">▣</span>
              </div>

              <h3 className="mt-6 text-[21px] font-semibold text-black">
                Frames
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-[#5B6470]">
                Beautiful formal, frameless, and acrylic frame solutions
                designed to preserve your memories, artwork, and special
                moments.
              </p>

              <button
                type="button"
                className="mt-6 text-sm font-semibold text-[#FE6B00] transition-colors hover:text-black"
              >
                Learn More →
              </button>
            </div>

            {/* Promotional Products */}
            <div className="group rounded-[20px] border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FE6B00] hover:shadow-lg sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E5] text-[#FE6B00]">
                <span className="text-xl">◇</span>
              </div>

              <h3 className="mt-6 text-[21px] font-semibold text-black">
                Promotional Products
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-[#5B6470]">
                Branded promotional items designed to increase your business
                visibility and reach.
              </p>

              <button
                type="button"
                className="mt-6 text-sm font-semibold text-[#FE6B00] transition-colors hover:text-black"
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Branding Packages */}
      <section className="bg-[#0D1B34] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div className="max-w-[700px]">
            <p className="text-xs font-semibold uppercase tracking-[2px] text-[#FE6B00]">
              Corporate Branding
            </p>

            <h2 className="mt-3 text-[34px] font-bold leading-tight tracking-[-1px] text-white sm:text-[42px] lg:text-[48px]">
              Need a Complete Branding Package?
            </h2>

            <p className="mt-4 max-w-[620px] text-[14px] leading-7 text-[#AAB5C7] sm:text-[15px]">
              Get everything your business needs to create a consistent and
              professional brand presence, from stationery and printed
              materials to promotional products.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-lg bg-[#FE6B00] px-7 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E86100] hover:shadow-lg"
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* Production Process */}
      <section className="bg-[#F8F9FA] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          {/* Header */}
          <div className="max-w-[650px]">
            <p className="text-xs font-semibold uppercase tracking-[2px] text-[#FE6B00]">
              Our Process
            </p>

            <h2 className="mt-3 text-[36px] font-bold leading-tight tracking-[-1.2px] text-black sm:text-[44px] lg:text-[50px]">
              From Concept to
              <br />
              <span className="text-[#FE6B00]">Final Product.</span>
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#5B6470] sm:text-[16px]">
              Our streamlined production process ensures every project is
              handled with precision, consistency, and attention to detail.
            </p>
          </div>

          {/* Process Steps */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 01 */}
            <div className="relative rounded-[20px] bg-white p-7 shadow-sm sm:p-8">
              <span className="text-[14px] font-bold text-[#FE6B00]">
                01
              </span>

              <h3 className="mt-5 text-[21px] font-semibold text-black">
                Consultation
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-[#5B6470]">
                We understand your goals, requirements, and project vision
                before production begins.
              </p>
            </div>

            {/* Step 02 */}
            <div className="relative rounded-[20px] bg-white p-7 shadow-sm sm:p-8">
              <span className="text-[14px] font-bold text-[#FE6B00]">
                02
              </span>

              <h3 className="mt-5 text-[21px] font-semibold text-black">
                Design &amp; Setup
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-[#5B6470]">
                Our team prepares your artwork and production setup to achieve
                the best possible result.
              </p>
            </div>

            {/* Step 03 */}
            <div className="relative rounded-[20px] bg-white p-7 shadow-sm sm:p-8">
              <span className="text-[14px] font-bold text-[#FE6B00]">
                03
              </span>

              <h3 className="mt-5 text-[21px] font-semibold text-black">
                Production
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-[#5B6470]">
                Using modern printing technology, we transform your approved
                design into a high-quality finished product.
              </p>
            </div>

            {/* Step 04 */}
            <div className="relative rounded-[20px] bg-white p-7 shadow-sm sm:p-8">
              <span className="text-[14px] font-bold text-[#FE6B00]">
                04
              </span>

              <h3 className="mt-5 text-[21px] font-semibold text-black">
                Quality &amp; Delivery
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-[#5B6470]">
                Every finished project goes through quality checks before we
                prepare it for delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;