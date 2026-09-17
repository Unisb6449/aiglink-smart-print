import { useEffect, useState } from "react";
import { Award, BriefcaseBusiness, Users } from "lucide-react";

import aboutImage from "../../assets/images/About-img.png";

function AnimatedNumber({ value, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1600;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function AboutPreview() {
  const stats = [
    {
      icon: Award,
      value: 10,
      suffix: "+",
      label: "Years Exp.",
    },
    {
      icon: BriefcaseBusiness,
      value: 5,
      suffix: "K+",
      label: "Projects Done",
    },
    {
      icon: Users,
      value: 99,
      suffix: "%",
      label: "Happy Clients",
    },
  ];

  return (
    <section className="bg-[#F8F9FA] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 md:gap-14 lg:grid-cols-[0.95fr_1fr] lg:gap-16">
        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-[20px] shadow-[0_15px_35px_rgba(0,0,0,0.12)]">
            <img
              src={aboutImage}
              alt="Aiglink printing and branding production"
              className="h-[340px] w-full object-cover sm:h-[430px] lg:h-[500px]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[590px]">
          {/* Label */}
          <p className="text-xs font-semibold uppercase tracking-[2px] text-[#FE6B00]">
            About Us
          </p>

          {/* Heading */}
          <h2 className="mt-3 text-[32px] font-bold leading-[1.1] tracking-[-1px] text-black sm:text-[38px] lg:text-[44px]">
            Innovation & Quality
            <br />
            in Every Print
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-[#5B6470] sm:text-[15px]">
            At Aiglink, we blend cutting-edge technology with creative
            expertise to deliver unmatched printing and branding solutions.
            We are dedicated to helping businesses establish a strong visual
            identity that resonates with their audience.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 border-t border-gray-200 pt-7">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-start"
                >
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF0E5]">
                    <Icon
                      size={16}
                      strokeWidth={2}
                      className="text-[#FE6B00]"
                    />
                  </div>

                  <p className="text-[25px] font-bold leading-none text-[#FE6B00] sm:text-[28px]">
                    <AnimatedNumber
                      value={stat.value}
                      suffix={stat.suffix}/>
                  </p>

                  <p className="mt-2 text-[10px] font-medium text-[#6B7280] sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FE6B00] hover:text-black hover:shadow-lg">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;