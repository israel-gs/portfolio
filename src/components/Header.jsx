import { useEffect, useState } from "react";
import LogoImage from "../assets/images/logo.svg";
import MenuIcon from "../assets/images/bars-solid.svg";
import CloseIcon from "../assets/images/xmark-solid.svg";
import { scrollToElement } from "../helpers/scrollToElement";
import { changeBackgroundOnScroll } from "../helpers/changeBackgroundOnScroll";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    changeBackgroundOnScroll(".appbar", ["bg-dark-900/30", "backdrop-blur-lg"]);
  }, []);

  const handleMenuItemClick = (target) => {
    scrollToElement(target);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const items = [
    { label: "Sobre mí", target: "#about" },
    { label: "Proyectos", target: "#skills" },
    { label: "Skills", target: "#projects" },
    { label: "Contáctame", target: "#contact" },
  ];

  return (
    <>
      <header className="appbar rounded-b-md w-full fixed flex justify-center items-center font-satoshi z-10 transition-all">
        <div className="max-w-[80%] flex w-full justify-between items-center py-4 md:py-8">
          <div className="">
            <a href="/" className="flex w-8 h-8">
              <img src={LogoImage} alt="Logo" className="w-8 h-8" />
            </a>
          </div>
          <div className="w-2/3 flex-1 hidden md:flex md:justify-end">
            <nav>
              <ul className="flex justify-end md:text-lg lg:text-xl gap-x-3 md:gap-x-12">
                {items.map((item, index) => (
                  <li key={index}>
                    <a
                      onClick={() => {
                        handleMenuItemClick(item.target);
                      }}
                      className="text-white hover:text-gray-300 transition-all"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="flex justify-center items-center p-2 rounded-full hover:bg-white/10 transition-colors w-[50px] h-[50px]"
            >
              <img src={MenuIcon} alt="" className="w-[25px] h-[25px]" />
            </button>
          </div>
        </div>
      </header>
      <nav
        className={`transition-all w-full h-full fixed top-0 overflow-hidden z-50 bg-dark-900/70 backdrop-blur-md fixed flex flex-col justify-center items-center ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="max-w-[80%] flex w-full justify-end py-4 md:py-8">
          <div className="flex">
            <button
              onClick={toggleMenu}
              className="flex justify-center items-center p-2 rounded-full hover:bg-white/10 transition-colors w-[50px] h-[50px]"
            >
              <img src={CloseIcon} alt="" className="w-[25px] h-[25px]" />
            </button>
          </div>
        </div>
        <ul className="flex-1 w-full flex flex-col items-center justify-center gap-y-3 md:text-lg lg:text-xl">
          {items.map((item, index) => (
            <li key={index}>
              <a
                onClick={() => {
                  handleMenuItemClick(item.target);
                }}
                className="text-white hover:text-gray-300 transition-all text-2xl"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
