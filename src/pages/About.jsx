import aboutHeroImage from "../assets/images/About-img.png";

function About() {
  return (
    <main>
      {/* About Hero */}
      <section className="bg-[#F8F9FA] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
          
          {/* Hero Content */}
          <div>
            <h1 className="max-w-[650px] text-[44px] font-bold leading-[1.05] tracking-[-1.8px] text-black sm:text-[54px] md:text-[60px] lg:text-[64px]">
              Redefining Print
              <br />
              <span className="text-[#FE6B00]">
                Through Precision.
              </span>
            </h1>

            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-[#5B6470] sm:text-[16px]">
              At Aiglink, we don't just print; we engineer visual experiences.
              Blending cutting-edge smart technology with artisanal attention
              to detail, we deliver corporate branding solutions that demand
              attention.
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full">
            <div className="overflow-hidden rounded-[18px]">
              <img
                src={aboutHeroImage}
                alt="Aiglink precision printing technology"
                className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[420px]"
              />
            </div>
          </div>

        </div>
      </section>

        {/* Our Mission */}
      <section className="bg-[#F3F4F6] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-2 lg:gap-20">
          
          {/* Mission Image */}
          <div className="overflow-hidden rounded-[18px]">
            <img
              src={aboutHeroImage}
              alt="Aiglink team working on printing projects"
              className="h-[360px] w-full object-cover sm:h-[450px] lg:h-[520px]"
            />
          </div>

          {/* Mission Content */}
          <div className="max-w-[570px]">
            <h2 className="text-[36px] font-bold leading-tight tracking-[-1.2px] text-black sm:text-[44px] lg:text-[50px]">
              Our Mission
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-[#5B6470] sm:text-[16px]">
              Founded on the belief that physical media still holds
              unparalleled power in a digital world, our mission is to
              elevate every brand's vision. We strive to make premium,
              high-fidelity printing accessible, reliable, and sustainable.
            </p>

            <p className="mt-5 text-[15px] leading-7 text-[#5B6470] sm:text-[16px]">
              We are committed to continuous innovation, ensuring that our
              smart printing technology not only meets the current demands of
              the market but anticipates the future needs of our clients.
            </p>
          </div>

        </div>
      </section>

            {/* Core Values */}
      <section className="bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          {/* Section Header */}
          <div className="mx-auto max-w-[650px] text-center">
            <h2 className="text-[36px] font-bold leading-tight tracking-[-1.2px] text-black sm:text-[44px] lg:text-[50px]">
              Core Values
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#5B6470] sm:text-[16px]">
              The principles that guide our presses and our people.
            </p>
          </div>

          {/* Values */}
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {/* Quality First */}
            <div className="flex min-h-[330px] flex-col justify-end rounded-[20px] bg-[#F8F9FA] p-7 sm:p-9 lg:p-10">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-white shadow-sm">
                <span className="text-lg text-[#FE6B00]">✦</span>
              </div>

              <h3 className="text-[25px] font-semibold text-black sm:text-[28px]">
                Quality First
              </h3>

              <p className="mt-3 max-w-[500px] text-[14px] leading-6 text-[#5B6470] sm:text-[15px]">
                Uncompromising standards in every droplet of ink and fiber of
                paper. We utilize automated quality control to ensure
                perfection in every batch.
              </p>
            </div>

            {/* Right Values */}
            <div className="grid gap-5">
              {/* Creative Solutions */}
              <div className="rounded-[20px] bg-[#F8F9FA] p-7 sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FFF0E5]">
                  <span className="text-lg text-[#FE6B00]">✦</span>
                </div>

                <h3 className="mt-5 text-[22px] font-semibold text-black sm:text-[24px]">
                  Creative Solutions
                </h3>

                <p className="mt-2 max-w-[520px] text-[14px] leading-6 text-[#5B6470]">
                  We don't just execute; we advise. From unique die-cuts to
                  specialized finishes, we bring bold ideas to life.
                </p>
              </div>

              {/* Smart Tech + Efficiency */}
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Smart Tech */}
                <div className="rounded-[20px] bg-[#0D1B34] p-7 text-white sm:min-h-[210px]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
                    <span className="text-lg text-white">⚙</span>
                  </div>

                  <h3 className="mt-5 text-[20px] font-semibold">
                    Smart Tech
                  </h3>

                  <p className="mt-2 text-[13px] leading-5 text-[#AAB5C7]">
                    Next-gen RIP software and automated calibration.
                  </p>
                </div>

                {/* Efficiency */}
                <div className="rounded-[20px] border border-gray-200 bg-white p-7 sm:min-h-[210px]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100">
                    <span className="text-lg text-black">⚡</span>
                  </div>

                  <h3 className="mt-5 text-[20px] font-semibold text-black">
                    Efficiency
                  </h3>

                  <p className="mt-2 text-[13px] leading-5 text-[#5B6470]">
                    Optimized workflows mean premium quality without the
                    premium price tag.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;