import { CheckCircle2 } from "lucide-react";
import Script from "next/script";
import { HoverBorderGradient } from "../hover-border-gradient";
import { InfiniteMovingCards } from "../infinite-moving-cards";
import { testimonialsList } from "../../constants";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: testimonialsList.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Review",
      author: item.title,
      reviewBody: item.description,
      name: item.domain,
    },
  })),
};
const Testimonials = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section
        aria-label="User testimonials from different industries"
        role="region"
        className="relative py-24 px-6 text-white"
      >
        <div className="w-full mx-auto text-center">
          <HoverBorderGradient
            containerClassName="inline-flex border-0 p-0.5"
            className="bg-white/15 backdrop-blur-none flex items-center space-x-2"
          >
            <div className="w-3 h-3 rounded-full bg-[rgb(207,255,17)]"></div>
            <p className="font-medium text-2xl text-[rgb(207,255,17)]">
              Testimonial
            </p>
          </HoverBorderGradient>

          <h2 className="text-5xl font-bold mb-8 mt-6 text-center">
            Trusted By Innovators
          </h2>
          <p className="text-lg text-gray-300 text-center">
            Secure your digital assets with the peace of mind that comes from
            knowing you are protected by the best technology in the Web3 space.
          </p>

          <div className="relative overflow-hidden space-y-5 mt-10">
            <InfiniteMovingCards direction="left" speed={"slow"}>
              {testimonialsList?.slice(1, 10).map((item, idx) => (
                <article
                  key={idx}
                  className="w-[250px] sm:min-w-[300px] sm:max-w-sm p-[2px] bg-gradient-to-r from-slate-400 to-slate-600 overflow-hidden rounded-xl"
                  role="listitem"
                  tabIndex={-1}
                >
                  <div className="bg-[#0F0F1F] p-5 w-full h-full rounded-xl">
                    <p className="text-white mb-6 text-sm leading-relaxed">
                      &quot;{item.description}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        aria-hidden="true"
                        focusable="false"
                        className="text-[rgb(207,255,17)]"
                      />
                      <div className="flex flex-col gap-1 justify-start text-left">
                        <p
                          className="font-semibold text-white text-sm line-clamp-1"
                          title={item?.title}
                        >
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-400">{item.domain}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </InfiniteMovingCards>
            <InfiniteMovingCards direction="right" speed={"slow"}>
              {testimonialsList?.slice(10).map((item, idx) => (
                <article
                  key={idx}
                  className="w-[250px] sm:min-w-[300px] sm:max-w-sm p-[2px] bg-gradient-to-r from-slate-400 to-slate-600 overflow-hidden rounded-xl"
                  role="listitem"
                  tabIndex={-1}
                >
                  <div className="bg-[#0F0F1F] p-5 w-full h-full rounded-xl">
                    <p className="text-white mb-6 text-sm leading-relaxed">
                      &quot;{item.description}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        aria-hidden="true"
                        focusable="false"
                        className="text-[rgb(207,255,17)]"
                      />
                      <div className="flex flex-col gap-1 justify-start text-left">
                        <p
                          className="font-semibold text-white text-sm line-clamp-1"
                          title={item?.title}
                        >
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-400">{item.domain}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </InfiniteMovingCards>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
