import MoonSectionSvg from "./MoonSectionSvg";

const SectionSvg = ({ crossesOffset }) => {
  return (
    <>
      <MoonSectionSvg
        className={`hidden absolute -top-[0.45rem] left-[1.5625rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:left-[2.1875rem]`}
      />

      <MoonSectionSvg
        className={`hidden absolute -top-[0.45rem] right-[1.5625rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:right-[2.1875rem]`}
      />
    </>
  );
};

export default SectionSvg;
