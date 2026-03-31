import Section from "./Section";
import Heading from "./Heading";
import { featuresData } from "../constants";

const AboutUs = () => (
  <Section
    id="about"
    className="lg:pt-[12rem] pt-[8rem] pb-24 -mt-21"
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
  >
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="flex-1 flex flex-col justify-start lg:sticky lg:top-32 lg:self-start">
          <Heading
            className="!mx-0 !text-left !mb-6 md:!text-left"
            tag="Why us"
            title="Companies choose us when results actually matter"
          />
          <p className="body-2 text-n-4 max-w-sm">
            We've worked with startups, scale-ups and enterprise teams across
            SaaS, FinTech and eCommerce. The common threadthey needed a partner
            not just a vendor
          </p>

          <div className="flex gap-8 mt-10 pt-8 border-t border-n-6">
            {[
              { n: "5+", l: "Years" },
              { n: "100+", l: "Projects" },
              { n: "20+", l: "Team members" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  className="font-black leading-none"
                  style={{
                    fontSize: "1.75rem",
                    background:
                      "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.45) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.n}
                </div>
                <div className="text-n-5 text-[10px] font-semibold uppercase tracking-widest mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-[1.4] flex flex-col divide-y divide-n-6">
          {featuresData.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col gap-3 py-8 first:pt-0 last:pb-0
                         hover:pl-3 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-5 h-[2px] rounded-full flex-shrink-0 transition-all duration-300 group-hover:w-8"
                  style={{ background: item.accent }}
                />
                <h3 className="font-semibold text-[1.05rem] text-n-2 group-hover:text-n-1 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>

              <p className="body-2 text-n-4 group-hover:text-n-3 transition-colors duration-300 pl-8">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default AboutUs;
