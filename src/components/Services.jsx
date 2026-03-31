import Heading from "./Heading";
import Section from "./Section";
import { servicesData } from "../constants";
import GlowCard from "./design/GlowCard";

const Services = () => (
  <Section id="services">
    <div className="container relative z-2">
      <Heading
        className="md:max-w-md lg:max-w-[50rem]"
        tag="What we do"
        title="We take products from zero to hero"
        text="Six core disciplines, one cohesive team - everything your product needs under one roof"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicesData.map((item) => (
          <GlowCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  </Section>
);

export default Services;
