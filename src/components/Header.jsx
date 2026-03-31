import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import CTAButton from "./design/CTAButton";
import Logo from "./image/Logo";

const Header = ({ onOpenModal }) => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleNavClick = (e, url) => {
    e.preventDefault();
    const id = url.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6
        ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}
    >
      <div className="relative z-[2] flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 lg:h-20 bg-n-8">
        <Logo onClick={(e) => handleNavClick(e, "#hero")} />

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } lg:static lg:flex lg:mx-auto lg:bg-transparent
            max-lg:hidden`}
        >
          <div className="flex flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={(e) => handleNavClick(e, item.url)}
                className={twMerge(
                  `block relative font-code uppercase text-n-1/40
                   transition-colors duration-200 hover:text-n-1
                   lg:text-xs lg:font-semibold lg:leading-5 xl:px-8 lg:px-6
                   ${item.onlyMobile ? "lg:hidden" : ""}`
                )}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <CTAButton className="hidden lg:inline-flex" onClick={onOpenModal}>
          Get in touch
        </CTAButton>

        <button
          className="ml-auto lg:hidden p-2 text-n-1"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>
      {/* Mobile nav overlay */}
      <nav
        className={`${
          openNavigation ? "flex" : "hidden"
        } fixed inset-0 z-[1] bg-n-8 pt-20 lg:hidden`}
      >
        <div className="flex flex-col items-center justify-center m-auto">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={(e) => handleNavClick(e, item.url)}
              className={twMerge(
                `block relative font-code text-2xl uppercase text-n-1/40
                 transition-colors duration-200 hover:text-n-1
                 px-6 py-6 md:py-8
                 ${item.onlyMobile ? "lg:hidden" : ""}`
              )}
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;
