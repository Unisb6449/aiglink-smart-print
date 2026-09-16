import {
  Printer,
  Paintbrush,
  PiggyBank,
  Smile,
} from "lucide-react";

function Benefits() {
  const benefits = [
    {
      icon: Printer,
      title: "Quality Printing",
    },
    {
      icon: Paintbrush,
      title: "Creative Branding",
    },
    {
      icon: PiggyBank,
      title: "Affordable Pricing",
    },
    {
      icon: Smile,
      title: "Customer Satisfaction",
    },
  ];

  return (
    <section className="bg-white px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1150px]">
        <div className="grid overflow-hidden rounded-[20px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.10)] sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="flex min-h-[145px] flex-col items-center justify-center gap-4 px-5 py-8 text-center transition-all duration-200 hover:bg-[#FFF9F5]"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF0E5]">
                  <Icon
                    size={21}
                    strokeWidth={2}
                    className="text-[#FE6B00]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[14px] font-semibold text-black sm:text-[15px]">
                  {benefit.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Benefits;