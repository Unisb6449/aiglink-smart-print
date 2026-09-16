import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const assets = import.meta.glob(
  "../../assets/**/*.{png,jpg,jpeg,webp,mp4,webm}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

const getAsset = (fileName) => {
  const entry = Object.entries(assets).find(([path]) =>
    path.toLowerCase().endsWith(fileName.toLowerCase()),
  );

  return entry ? entry[1] : "";
};

const slides = [
  {
    id: 1,
    type: "video",
    media: getAsset("Aiglink-Hero-Video.mp4"),
    label: "Aiglink Smart Printing",
    title: "Bringing Your Ideas to Life",
    highlight: "Through Quality Printing.",
    description:
      "Professional printing solutions designed to give your business a strong and lasting visual presence.",
  },
  {
    id: 2,
    type: "image",
    media: getAsset("Branding-hero.png"),
    label: "Creative Branding",
    title: "Make Your Brand",
    highlight: "Stand Out.",
    description:
      "Creative branding solutions designed to give your business a professional and memorable identity.",
  },
  {
    id: 3,
    type: "video",
    media: getAsset("Printing-hero.mp4"),
    label: "Premium Printing",
    title: "Quality Printing",
    highlight: "Made to Impress.",
    description:
      "High-quality printing created with attention to detail, consistency, and professional finishing.",
  },
  {
    id: 4,
    type: "image",
    media: getAsset("Frame-hero.png"),
    label: "Premium Frames",
    title: "Preserve Your Memories",
    highlight: "With Beautiful Frames.",
    description:
      "Elegant frame solutions designed to turn your favorite moments and artwork into something special.",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative min-h-[680px] overflow-hidden bg-black sm:min-h-[720px] lg:min-h-[780px]"
      aria-label="Aiglink featured services"
    >
      {/* =========================
          BACKGROUND MEDIA
      ========================== */}
      <div className="pointer-events-none absolute inset-0">
        {slide.type === "video" ? (
          slide.media ? (
            <video
              key={slide.media}
              src={slide.media}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
              aria-label={slide.label}
            />
          ) : (
            <div className="h-full w-full bg-black" />
          )
        ) : slide.media ? (
          <img
            src={slide.media}
            alt={slide.label}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-black" />
        )}
      </div>

      {/* =========================
          LIGHT OVERLAY
      ========================== */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />

      {/* =========================
          CONTENT
      ========================== */}
      <div className="relative z-10 flex min-h-[680px] items-center sm:min-h-[720px] lg:min-h-[780px]">
        <div className="mx-auto w-full max-w-[1280px] px-16 py-20 sm:px-20 lg:px-24">
          <div className="max-w-[760px]">
            {/* Label */}
            <p className="mb-5 text-sm font-semibold uppercase tracking-[3px] text-[#FE6B00]">
              {slide.label}
            </p>

            {/* Heading */}
            <h1 className="text-[42px] font-bold leading-[1.05] tracking-[-1.8px] text-white sm:text-[54px] md:text-[64px] lg:text-[76px]">
              {slide.title}
              <br />
              <span className="text-[#FE6B00]">
                {slide.highlight}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-white/85 sm:text-[17px] sm:leading-8">
              {slide.description}
            </p>

            {/* Buttons */}
            <div className="relative z-30 mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#FE6B00] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#e85f00] hover:shadow-lg"
              >
                Get a Quote
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          PREVIOUS BUTTON
      ========================== */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#FE6B00] hover:bg-[#FE6B00] sm:left-5 lg:left-7"
      >
        <ChevronLeft size={21} />
      </button>

      {/* =========================
          NEXT BUTTON
      ========================== */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#FE6B00] hover:bg-[#FE6B00] sm:right-5 lg:right-7"
      >
        <ChevronRight size={21} />
      </button>

      {/* =========================
          QUALITY BADGE
      ========================== */}
      <div className="absolute bottom-20 right-6 z-30 hidden rounded-2xl border border-white/10 bg-black/40 px-5 py-4 shadow-lg backdrop-blur-md sm:block lg:right-12">
        <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[#FE6B00]">
          Aiglink
        </p>

        <p className="mt-1 text-sm font-bold text-white">
          Quality You Can Trust
        </p>
      </div>

      {/* =========================
          CAROUSEL INDICATORS
      ========================== */}
      <div className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2">
        {slides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-8 bg-[#FE6B00]"
                : "w-2.5 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;