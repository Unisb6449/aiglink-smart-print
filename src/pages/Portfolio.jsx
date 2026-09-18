import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  "All",
  "Printing",
  "Branding",
  "Frames",
  "Apparel",
  "Promotional",
];

const projects = [
  // ================================================================
  // PRINTING
  // ================================================================

  {
    title: "Premium Business Prints",
    category: "Printing",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789677112/PortfolioShowcase2.jpg",
    description:
      "High-quality business printing designed to give your brand a professional look.",
    type: "image",
    showInAll: true,
  },

  {
    title: "Professional Print Materials",
    category: "Printing",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789609745/PortfolioShowcase1.jpg",
    description:
      "Professional print materials produced with quality and attention to detail.",
    type: "image",
    showInAll: true,
  },

  {
    title: "Printing Project 3",
    category: "Printing",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789706070/PortfolioPrintingI.jpg",
    description: "Quality printing project.",
    type: "image",
    showInAll: false,
  },

  {
    title: "Printing Project 4",
    category: "Printing",
    image:
      "https://res.cloudinary.com/regrxhop/video/upload/v1789706921/PortfolioPrintingC.mp4",
    description: "Professional printing project.",
    type: "video",
    showInAll: false,
  },

  {
    title: "Printing Project 5",
    category: "Printing",
    image:
      "https://res.cloudinary.com/regrxhop/video/upload/v1789668452/PortfolioPrintingD.mp4",
    description: "Professional printing project.",
    type: "video",
    showInAll: false,
  },

  {
    title: "Printing Project 6",
    category: "Printing",
    image:
      "https://res.cloudinary.com/regrxhop/video/upload/v1789667013/PortfolioPrinting2.mp4",
    description: "Quality printing project.",
    type: "video",
    showInAll: false,
  },

  {
    title: "Printing Project 7",
    category: "Printing",
    image:
      "https://res.cloudinary.com/regrxhop/video/upload/v1789671417/PortfolioPrintingE.mp4",
    description: "Quality printing project.",
    type: "video",
    showInAll: false,
  },

  {
    title: "Printing Project 8",
    category: "Printing",
    image:
      "https://res.cloudinary.com/regrxhop/video/upload/v1789671773/PortfolioPrintingF.mp4",
    description: "Quality printing project.",
    type: "video",
    showInAll: false,
  },

  {
    title: "Printing Project 9",
    category: "Printing",
    image:
      "https://res.cloudinary.com/regrxhop/video/upload/v1789675316/PortfolioPrintingK.mp4",
    description: "Quality printing project.",
    type: "video",
    showInAll: false,
  },

  {
    title: "Printing Project 10",
    category: "Printing",
    image:
      "https://res.cloudinary.com/regrxhop/video/upload/v1789675584/PortfolioPrintingL.mp4",
    description: "Quality printing project.",
    type: "video",
    showInAll: false,
  },

  {
    title: "Printing Project 11",
    category: "Printing",
    image:
      "https://res.cloudinary.com/regrxhop/video/upload/v1789676050/PortfolioPrintingM.mp4",
    description: "Quality printing project.",
    type: "video",
    showInAll: false,
  },

  {
    title: "Printing Project 12",
    category: "Printing",
    image:
      "https://res.cloudinary.com/regrxhop/video/upload/v1789676216/PortfolioPrintingN.mp4",
    description: "Quality printing project.",
    type: "video",
    showInAll: false,
  },

  {
    title: "Printing Project 13",
    category: "Printing",
    image:
      "https://res.cloudinary.com/regrxhop/video/upload/v1789674292/PortfolioPrintingJ.mp4",
    description: "Quality printing project.",
    type: "video",
    showInAll: false,
  },

  {
    title: "Printing Project 14",
    category: "Printing",
    image:
      "https://res.cloudinary.com/regrxhop/video/upload/v1789668211/PortfolioPrintingA.mp4",
    description: "Quality printing project.",
    type: "video",
    showInAll: false,
  },

  {
    title: "Printing Project 15",
    category: "Printing",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789677027/PortfolioPrintingF.jpg",
    description: "Quality printing project.",
    type: "image",
    showInAll: false,
  },

  // ================================================================
  // BRANDING
  // ================================================================

  {
    title: "Corporate Branding",
    category: "Branding",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789676656/Aiglink.png",
    description:
      "Professional branding solutions created to give businesses a strong visual identity.",
    type: "image",
    showInAll: true,
  },

  {
    title: "Creative Brand Materials",
    category: "Branding",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789676740/Devrise-Tech.png",
    description:
      "Creative branded materials designed to make your business stand out.",
    type: "image",
    showInAll: true,
  },

  // ================================================================
  // FRAMES
  // ================================================================

  {
    title: "Custom Decorative Frame",
    category: "Frames",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789676904/PortfolioFrame8.jpg",
    description:
      "Beautiful custom frames designed to preserve and display special moments.",
    type: "image",
    showInAll: true,
  },

  {
    title: "Graduation Photo Frame",
    category: "Frames",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789677131/PortfolioShowcase4.jpg",
    description:
      "Elegant graduation frames designed to preserve memorable achievements.",
    type: "image",
    showInAll: true,
  },

  {
    title: "Frame Project 3",
    category: "Frames",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789676959/PortfolioFrame12.jpg",
    description: "Beautiful custom frame project.",
    type: "image",
    showInAll: false,
  },

  {
    title: "Frame Project 4",
    category: "Frames",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789676934/PortfolioFrame10.jpg",
    description: "Beautiful custom frame project.",
    type: "image",
    showInAll: false,
  },

  {
    title: "Frame Project 5",
    category: "Frames",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789676946/PortfolioFrame11.jpg",
    description: "Beautiful custom frame project.",
    type: "image",
    showInAll: false,
  },

  {
    title: "Frame Project 6",
    category: "Frames",
    image:
      "https://res.cloudinary.com/regrxhop/video/upload/v1789707802/PortfolioFrame2.mp4",
    description: "Beautiful custom frame project.",
    type: "video",
    showInAll: false,
  },

  {
    title: "Frame Project 7",
    category: "Frames",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789676868/PortfolioFrame3.jpg",
    description: "Beautiful custom frame project.",
    type: "image",
    showInAll: false,
  },

  {
    title: "Frame Project 8",
    category: "Frames",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789676870/PortfolioFrame5.jpg",
    description: "Beautiful custom frame project.",
    type: "image",
    showInAll: false,
  },

  {
    title: "Frame Project 9",
    category: "Frames",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789676924/PortfolioFrame9.jpg",
    description: "Beautiful custom frame project.",
    type: "image",
    showInAll: false,
  },

  {
    title: "Frame Project 10",
    category: "Frames",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789676891/PortfolioFrame7.jpg",
    description: "Beautiful custom frame project.",
    type: "image",
    showInAll: false,
  },

  {
    title: "Frame Project 11",
    category: "Frames",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789676877/PortfolioFrame6.jpg",
    description: "Beautiful custom frame project.",
    type: "image",
    showInAll: false,
  },

  {
    title: "Frame Project 12",
    category: "Frames",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789676806/Frame-hero.png",
    description: "Beautiful custom frame project.",
    type: "image",
    showInAll: false,
  },

  // ================================================================
  // APPAREL
  // ================================================================

  {
    title: "Custom Branded Apparel",
    category: "Apparel",
    image:
      "https://res.cloudinary.com/regrxhop/video/upload/v1789676413/PortfolioShowcase6.mp4",
    description:
      "Custom apparel created for businesses, events, and special occasions.",
    type: "video",
    showInAll: true,
  },

  {
    title: "Branded Event Wear",
    category: "Apparel",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789677129/PortfolioShowcase7.jpg",
    description:
      "Branded event wear designed to create a unified and professional appearance.",
    type: "image",
    showInAll: true,
  },

  // ================================================================
  // PROMOTIONAL
  // ================================================================

  {
    title: "Business Promotional Items",
    category: "Promotional",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789677181/Promotional1.png",
    description:
      "Custom promotional products designed to increase brand visibility.",
    type: "image",
    showInAll: true,
  },

  {
    title: "Custom Promotional Products",
    category: "Promotional",
    image:
      "https://res.cloudinary.com/regrxhop/image/upload/v1789677195/Promotional2.png",
    description:
      "Creative promotional products designed for businesses and events.",
    type: "image",
    showInAll: false,
  },
];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  // All contains only the 9 curated projects.
  const curatedAllProjects = projects.filter(
    (project) => project.showInAll === true,
  );

  const filteredProjects =
    activeCategory === "All"
      ? curatedAllProjects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="relative overflow-hidden bg-black pt-20">
        <div className="mx-auto flex min-h-[420px] w-full max-w-[1280px] items-center px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6B00]">
              Our Portfolio
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Work That Speaks
              <span className="block text-[#FE6B00]">
                For Itself.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
              Explore our collection of printing, branding, frames,
              apparel, and promotional projects created with quality
              and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          CATEGORY FILTERS
      ============================================================ */}
      <section className="bg-[#F8F9FA] px-6 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-[1280px] flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#FE6B00] text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-[#FE6B00] hover:text-white"
              }`}>
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* ============================================================
          PORTFOLIO GALLERY
      ============================================================ */}
      <section className="bg-white px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#FE6B00]">
              {activeCategory === "All"
                ? "Selected Work"
                : activeCategory}
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {activeCategory === "All"
                ? "Featured Projects"
                : `${activeCategory} Projects`}
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              A selection of projects that showcase our commitment
              to quality, creativity, and professional execution.
            </p>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <article
                  key={`${project.title}-${index}`}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Media */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    {project.type === "video" ? (
                      <video
                        src={project.image}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        controls
                        muted
                        playsInline
                        preload="metadata"/>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"/>
                    )}

                    {/* Category Badge */}
                    <div className="absolute left-4 top-4 rounded-full bg-black/75 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                      {project.category}
                    </div>

                    {/* Video Badge */}
                    {project.type === "video" && (
                      <div className="absolute top-4 right-4 rounded-full bg-[#FE6B00] px-3 py-1.5 text-xs font-semibold text-white">
                        Video
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-[#F8F9FA] px-6 py-16 text-center">
              <h3 className="text-xl font-bold text-gray-900">
                No projects available
              </h3>

              <p className="mt-2 text-gray-600">
                Projects for this category will be added soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          FEATURED PROJECTS
      ============================================================ */}
      <section className="bg-[#F8F9FA] px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#FE6B00]">
              Featured Projects
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Quality You Can See
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Every project is handled with attention to quality,
              creativity, and the unique needs of our clients.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {curatedAllProjects.slice(0, 3).map((project, index) => (
              <div
                key={`featured-${project.title}-${index}`}
                className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  {project.type === "video" ? (
                    <video
                      src={project.image}
                      className="h-full w-full object-cover"
                      controls
                      muted
                      playsInline
                      preload="metadata"/>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      loading="lazy"/>
                  )}
                </div>

                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#FE6B00]">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-gray-900">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FRAMES FEATURE
      ============================================================ */}
      <section className="bg-white px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#FE6B00]">
              Frames
            </p>

            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Preserve Your Special Moments
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-600">
              From formal classic frames to modern and creative
              options, we create frame solutions that help you
              preserve and display your most important memories.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center rounded-full bg-[#FE6B00] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-600">
              Request a Quote
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {projects
              .filter((project) => project.category === "Frames")
              .slice(0, 4)
              .map((project, index) => (
                <div
                  key={`frame-feature-${project.title}-${index}`}
                  className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                  {project.type === "video" ? (
                    <video
                      src={project.image}
                      className="h-full w-full object-cover"
                      controls
                      muted
                      playsInline
                      preload="metadata"/>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"/>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
      ============================================================ */}
      <section className="px-6 pb-16 sm:px-8 lg:px-12 lg:pb-20">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="overflow-hidden rounded-3xl bg-black px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6B00]">
              Start Your Project
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Let&apos;s Bring Your Ideas to Life
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-300">
              Have a printing, branding, apparel, frame, or
              promotional project in mind? Let&apos;s create
              something exceptional together.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center rounded-full bg-[#FE6B00] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-orange-600">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;