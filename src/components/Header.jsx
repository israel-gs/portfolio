import { useEffect } from "react";
import LogoImage from "../assets/images/logo.svg";
import MenuIcon from "../assets/images/bars-solid.svg";
import { scrollToElement } from "../helpers/scrollToElement";

export default function Header() {
  useEffect(() => {
    changeAppbarBackgroundOnScroll();
  }, []);

  const changeAppbarBackgroundOnScroll = () => {
    const appbar = document.querySelector(".appbar");
    const classesToAdd = ["bg-dark-900/30", "backdrop-blur-lg"];
    const height = appbar.offsetHeight;
    document.addEventListener("scroll", (e) => {
      if (window.scrollY > height) {
        appbar.classList.add(...classesToAdd);
      } else {
        appbar.classList.remove(...classesToAdd);
      }
    });
  };

  const handleContactMeClick = () => {
    scrollToElement("#contact");
  };

  return (
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
              <li className="">
                <a
                  href="/about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Sobre mí
                </a>
              </li>
              <li className="">
                <a
                  href="/projects"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li className="">
                <a
                  href="/skills"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li className="">
                <button
                  href=""
                  onClick={handleContactMeClick}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contáctame
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex md:hidden">
          <button className="flex justify-center items-center p-2 rounded-full hover:bg-white/10 transition-colors w-[50px] h-[50px]">
            <img src={MenuIcon} alt="" className="w-[25px] h-[25px]" />
          </button>
        </div>
      </div>
    </header>
  );
}
